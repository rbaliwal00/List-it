import React, { useState, useRef, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useHttpClient } from '../hooks/http-hook';

import ErrorModal from '../../shared/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/UIElements/LoadingSpinner';
import MainHeader from '../../shared/Components/MainHeader';
import { useForm } from '../hooks/form-hook';
import { AuthContext } from '../../shared/context/auth-context';
import './EditImage.css';

const EditImage = props => {
    const auth = useContext(AuthContext);
    const [preview, setPreview] = useState([]);
    const fileobj = [];
    const [files, setFiles] = useState();
    const [postId, setPostId] = useState(); 
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const filePickerRef = useRef();

    const pickImageHandler = () => {
        filePickerRef.current.click();
    }

    const { location, categoryType, form } = useParams();
    let history = useHistory();

    useEffect(() => {
        
    }, [sendRequest]);

    const changedHandler = event => {
        let files = event.target.files;
        fileobj.push(files);
        setFiles(event.target.files);
        let reader;

        for (var i = 0; i < fileobj[0].length; i++) {
            reader = new FileReader();
            reader.readAsDataURL(fileobj[0][i]);
            reader.onload = event => {
                preview.push(event.target.result);   // update the array instead of replacing the entire value of preview
                
                setPreview([...new Set(preview)]); // spread into a new array to trigger rerender
            }
        }
    }

    const addImagesHandler = async event => {
        event.preventDefault();

        try {
            if (files.length <= 0) {
                history.push(`/${location}/${categoryType}/${form}/preview`);   
            }
            const formData = new FormData();
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i]);
            }
            const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/lastpost`);

            await sendRequest(process.env.REACT_APP_BACKEND_URL + `/posts/${responseData.post._id}/images`,
                'POST',
                formData,
                { Authorization: 'Bearer ' + auth.token }
            ); 
            history.push(`/`);   
        } catch (err) {
        };
        
    }; 

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError} />
            <MainHeader>
                <nav>
                    <p>India > {location} > {categoryType} > {form}</p>
                </nav>
            </MainHeader>
            <main>
                <form onSubmit={addImagesHandler}>
                    {isLoading && <LoadingSpinner asOverlay />}  
                    <input
                        type="file"
                            name="file"
                            id="images"
                        multiple
                        onChange={changedHandler}
                        ref={filePickerRef}
                        style={{ display: 'none' }} />
                    <div className="first-container">
                        <p>this posting has 0 images, of a maximum 6</p>
                    </div>
                    <div className="second-container">
                        <button onClick={pickImageHandler}>Add Images</button>
                    </div>
                    <div className="multi-preview">
                        <div >
                            {(preview || []).map((url, index) => (
                                <img src={url} alt="images" id="image" key={index} />
                            ))}
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit" onClick={addImagesHandler}>done with images</button>
                    </div>
                </form>
            </main>
        </React.Fragment>
        )
};

export default EditImage;