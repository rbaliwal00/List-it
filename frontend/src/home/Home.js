import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../shared/context/auth-context';
import { useHttpClient } from '../postings/hooks/http-hook';
import MainHeader from '../shared/Components/MainHeader';
import Postings from '../postings/pages/Postings';
import './Home.css';

const Home = props => {
    const auth = useContext(AuthContext);
    const { sendRequest } = useHttpClient();
    const [loadedPosts, setLoadedPosts] = useState();
    const [showCommunityList, setShowCommunityList] = useState(false);
    const [showHousingList, setShowHousingList] = useState(false);
    const [showJobsList, setShowJobsList] = useState(false);
    const [showServicesList, setShowServicesList] = useState(false);
    const [showSaleList, setShowSaleList] = useState(false);
    const [showGigsList, setShowGigsList] = useState(false);
   
    let id = props.userId;
    useEffect(() => {
        
        const fetchPlaces = async () => {
            try {
                const responseData = await sendRequest(process.env.REACT_APP_BACKEND_URL + `/users/${id}`);
                setLoadedPosts(responseData.user.image);
            } catch (err) { }
        };
        if (auth.isLoggedIn) { fetchPlaces(); }
    }, [sendRequest, id, auth.isLoggedIn]);

    const toggleListHandler = event => {
        switch (event.target.id) {
            case 'community':
                setShowCommunityList(!showCommunityList);
                break;
            case 'housing':
                setShowHousingList(!showHousingList);
                break;
            case 'jobs':
                setShowJobsList(!showJobsList);
                break;
            case 'services':
                setShowServicesList(!showServicesList);
                break;
            case 'sale':
                setShowSaleList(!showSaleList);
                break;
            case 'gigs':
                setShowGigsList(!showGigsList);
                break;
            default:
                return;
        }
    }
    console.log(loadedPosts);
    return (
        <>  
            <div className="d-md-none">
                <MainHeader >
                </MainHeader>
            </div>
            <main className="main-main">
                <div className="main-whole">
                    <div className="main-logo col-lg-3 col-md-2 col-sm-2 d-none d-md-block">
                        <h1 className="center tags"><NavLink to="/" style={{color: 'gray'}}>ListIt  <sup>in</sup></NavLink></h1>
                        {!auth.isLoggedIn && (<p className="center tags"><NavLink to="/auth" exact style={{ textDecoration: 'none', color: 'blue' }}>Authentication</NavLink></p>
                        )}
                        {auth.isLoggedIn && (
                            <div className="center"><img
                                        src={`${loadedPosts}`}
                                        alt="profile"
                                    style={{ width: '100px', height: '100px' }} />
                            </div>
                        )}
                        {auth.isLoggedIn && (<p className="center tags"><NavLink to="/postings/new/location" exact style={{ textDecoration: 'none', color: 'blue' }}>Create Posting</NavLink></p>)}
                        {auth.isLoggedIn && (
                            <p className="center tags"><NavLink to={`/${auth.userId}/posts`} exact style={{ textDecoration: 'none', color: 'blue' }}>My Posts</NavLink></p>
                        )}
                        {auth.isLoggedIn && (
                            <p className="center tags"><NavLink to="/" exact style={{ textDecoration: 'none', color: 'blue' }} onClick={auth.logout}>Logout</NavLink></p>
                        )}
                    </div>
                    <div className="main-content col-lg-7">
                        <div className=" row">
                            <div className="main-city col-lg-12 ">
                                <div className="row">
                                    <div className="col-7 col-sm-6" style={{ padding: '5px', paddingTop: '12px' }}><h3>India</h3></div>
                                    <div className="col-2 col-sm-3 d-md-none"
                                        style={{ padding: '0', textAlign: 'right', paddingTop: '12px'}}>
                                        {auth.isLoggedIn && (
                                            <p className="center">
                                                <NavLink to="/postings/new/location" exact
                                                    style={{ textDecoration: 'none', textAlign: 'right' }}>
                                                    Create Posting
                                                </NavLink>
                                            </p>)}
                                    </div>
                                    <div className="col-2 col-sm-3 d-md-none" style={{padding: '0', textAlign: 'left', paddingTop: '12px'}}>
                                        {auth.isLoggedIn && (
                                            <p className="center"><NavLink to={`/${auth.userId}/posts`} exact style={{ textDecoration: 'none' }}>My Posts</NavLink></p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="main-box col-lg-4">
                                <NavLink to={`/type/community`}><div id="community" className="main-heading d-none d-lg-block" onClick={toggleListHandler}>community</div></NavLink>
                                <div id="community" className="main-heading d-lg-none" onClick={toggleListHandler}>community</div>
                                <div className={`main-lists-container row ${showCommunityList ? '' : 'main-hide'}`}>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/type/community`}><div id="community" className="main-lists d-lg-none" onClick={toggleListHandler}>all community</div></NavLink>
                                        <NavLink to={`/form/activities`}><div className="main-lists">activities</div></NavLink>
                                        <NavLink to={`/form/artists`}><div className="main-lists">artists</div></NavLink>
                                        <NavLink to={`/form/childcare`}><div className="main-lists">childcare</div></NavLink>
                                        <NavLink to={`/form/classes`}><div className="main-lists">classes</div></NavLink>
                                        <NavLink to={`/form/events`}><div className="main-lists">events</div></NavLink>
                                        <NavLink to={`/form/general`}><div className="main-lists">general</div></NavLink>
                                        <NavLink to={`/form/groups`}><div className="main-lists">groups</div></NavLink>
                                        <NavLink to={`/form/local-news`}><div className="main-lists">local news</div></NavLink>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/form/lost-found`}><div className="main-lists">lost&found</div></NavLink>
                                        <NavLink to={`/form/missed`}><div className="main-lists">missed</div></NavLink>
                                        <NavLink to={`/form/connections`}><div className="main-lists">connections</div></NavLink>
                                        <NavLink to={`/form/musicians`}><div className="main-lists">musicians</div></NavLink>
                                        <NavLink to={`/form/pets`}><div className="main-lists">pets</div></NavLink>
                                        <NavLink to={`/form/politics`}><div className="main-lists">politics</div></NavLink>
                                        <NavLink to={`/form/rants-raves`}><div className="main-lists">rants & raves</div></NavLink>
                                        <NavLink to={`/form/rideshares`}><div className="main-lists">rideshares</div></NavLink>
                                        <NavLink to={`/form/volunteers`}><div className="main-lists">volunteers</div></NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="main-box col-lg-4">
                                <NavLink to={`/type/housing`}><div id="housing" className="main-heading d-none d-lg-block" onClick={toggleListHandler}>housing</div></NavLink>
                                <div id="housing" className="main-heading d-lg-none" onClick={toggleListHandler}>housing</div>
                                <div className={`col-12 ${showHousingList ? '' : 'main-hide'}`}>
                                    <NavLink to={`/type/housing`}><div id="housing" className="main-lists d-lg-none" onClick={toggleListHandler}>all housing</div></NavLink>
                                    <NavLink to={`/form/apts-housing`}><div className="main-lists">apts / housing</div></NavLink>
                                    <NavLink to={`/form/houseswap`}><div className="main-lists">housing swap</div></NavLink>
                                    <NavLink to={`/form/apts-housing`}><div className="main-lists">housing wanted</div></NavLink>
                                    <NavLink to={`/form/office-commercial`}><div className="main-lists">office commercial</div></NavLink>
                                    <NavLink to={`/form/parking-storage`}><div className="main-lists">parking / storage</div></NavLink>
                                    <NavLink to={`/form/wanted-real-estate`}><div className="main-lists">real estate for sale</div></NavLink>
                                    <NavLink to={`/form/room-shares`}><div className="main-lists">room / shared</div></NavLink>
                                    <NavLink to={`/form/wanted-room-share`}><div className="main-lists">rooms wanted</div></NavLink>
                                    <NavLink to={`/form/sublets-temp`}><div className="main-lists">sublets / temporary</div></NavLink>
                                    <NavLink to={`/form/vacation-rentals`}><div className="main-lists">vacation rentals</div></NavLink>
                                </div>
                            </div>
                            <div className="main-box col-lg-4">
                                <NavLink to={`/type/jobs`}><div id="jobs" className="main-heading d-none d-lg-block" onClick={toggleListHandler}>jobs</div></NavLink>
                                <div id="jobs" className="main-heading d-lg-none" onClick={toggleListHandler}>jobs</div>
                                <div className={`${showJobsList ? '' : 'main-hide'}`}>
                                    <NavLink to={`/type/jobs`}><div id="jobs" className="main-lists d-lg-none" onClick={toggleListHandler}>all jobs</div></NavLink>
                                    <NavLink to={`/form/accounting-finance`}><div className="main-lists">accounting & finance</div></NavLink>
                                    <NavLink to={`/form/admin-office`}><div className="main-lists">admin / office</div></NavLink>
                                    <NavLink to={`/form/achitect-engineer-cad`}><div className="main-lists">arch / engineering</div></NavLink>
                                    <NavLink to={`/form/art-design-media`}><div className="main-lists">art / media / design</div></NavLink>
                                    <NavLink to={`/form/business-mgmt`}><div className="main-lists">biotech / science</div></NavLink>
                                    <NavLink to={`/form/customer-service`}><div className="main-lists">business / mgmt</div></NavLink>
                                    <NavLink to={`/form/education-teaching`}><div className="main-lists">customer service</div></NavLink>
                                    <NavLink to={`/form/et-cetera`}><div className="main-lists">education</div></NavLink>
                                    <NavLink to={`/form/food-beverage-hospitality`}><div className="main-lists">etc / misc</div></NavLink>
                                    <NavLink to={`/form/general-labour`}><div className="main-lists">food / bev / hosp</div></NavLink>
                                    <NavLink to={`/form/government`}><div className="main-lists">general labor</div></NavLink>
                                    <NavLink to={`/form/healthcare`}><div className="main-lists">government</div></NavLink>
                                    <NavLink to={`/form/human-resource`}><div className="main-lists">human resources</div></NavLink>
                                    <NavLink to={`/form/legal-paralegal`}><div className="main-lists">legal paralegal</div></NavLink>
                                    <NavLink to={`/form/manufacturing`}><div className="main-lists">manufacturing</div></NavLink>
                                    <NavLink to={`/form/marketing-advertising-pr`}><div className="main-lists">marketing / pr / ad</div></NavLink>
                                    <NavLink to={`/form/nonprofit`}><div className="main-lists">medical /health</div></NavLink>
                                    <NavLink to={`/form/real-estate`}><div className="main-lists">nonprofit sector</div></NavLink>
                                    <NavLink to={`/form/retail-wholesale`}><div className="main-lists">real estate</div></NavLink>
                                    <NavLink to={`/form/sales`}><div className="main-lists">retail / wholesale</div></NavLink>
                                    <NavLink to={`/form/salon-spa-fitness`}><div className="main-lists">sales / biz dev</div></NavLink>
                                    <NavLink to={`/form/science-biotech`}><div className="main-lists">salon / spa / fitness</div></NavLink>
                                    <NavLink to={`/form/security`}><div className="main-lists">security</div></NavLink>
                                    <NavLink to={`/form/skilled-trades-artisan`}> <div className="main-lists">skilled trade / craft</div></NavLink>
                                    <NavLink to={`/form/software-qa-dba-etc`}><div className="main-lists">software / qa / dba</div></NavLink>
                                    <NavLink to={`/form/systems-networking`}><div className="main-lists">systems / network</div></NavLink>
                                    <NavLink to={`/form/technical-support`}><div className="main-lists">technical support</div></NavLink>
                                    <NavLink to={`/form/transportation`}><div className="main-lists">transport</div></NavLink>
                                    <NavLink to={`/form/tv-film-radio`}><div className="main-lists">tv / film / video</div></NavLink>
                                    <NavLink to={`/web-html-info-design`}><div className="main-lists">web / info design</div></NavLink>
                                    <NavLink to={`/form/writing-editing`}><div className="main-lists">writing / editing</div></NavLink>
                                </div>
                            </div>
                            <div className="main-box col-lg-4">
                                <NavLink to={`/type/services`}><div id="services" className="main-heading d-none d-lg-block" onClick={toggleListHandler}>services</div></NavLink>
                                <div id="services" className="main-heading d-lg-none" onClick={toggleListHandler}>services</div>
                                <div className={`main-lists-container row ${showServicesList ? '' : 'main-hide'}`}>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/type/services`}><div id="services" className="main-lists d-lg-none" onClick={toggleListHandler}>all services</div></NavLink>
                                        <NavLink to={`/form/automotive-service`}><div className="main-lists">automotive</div></NavLink>
                                        <NavLink to={`/form/beauty-services`}><div className="main-lists">beauty</div></NavLink>
                                        <NavLink to={`/form/cell-phone`}><div className="main-lists">cell/mobile</div></NavLink>
                                        <NavLink to={`/form/computer-services`}><div className="main-lists">computer</div></NavLink>
                                        <NavLink to={`/form/creative-services`}><div className="main-lists">creative</div></NavLink>
                                        <NavLink to={`/form/cycle-services`}><div className="main-lists">cycle</div></NavLink>
                                        <NavLink to={`/form/event-services`}><div className="main-lists">event</div></NavLink>
                                        <NavLink to={`/form/farm-garden-services`}><div className="main-lists">farm&garden</div></NavLink>
                                        <NavLink to={`/form/financial-services`}><div className="main-lists">financial</div></NavLink>
                                        <NavLink to={`/form/household-services`}><div className="main-lists">household</div></NavLink>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/form/labor-hauling-moving`}><div className="main-lists">labor/move</div></NavLink>
                                        <NavLink to={`/form/legal-services`}><div className="main-lists">legal</div></NavLink>
                                        <NavLink to={`/form/lessons-tutoring`}><div className="main-lists">lessons</div></NavLink>
                                        <NavLink to={`/form/marine-services`}><div className="main-lists">marine</div></NavLink>
                                        <NavLink to={`/form/pet-services`}><div className="main-lists">pet</div></NavLink>
                                        <NavLink to={`/form/real-estate-services`}><div className="main-lists">real estate</div></NavLink>
                                        <NavLink to={`/form/skilled-trade-services`}><div className="main-lists">skilled trade</div></NavLink>
                                        <NavLink to={`/form/small-biz-ads`}><div className="main-lists">sm biz ads</div></NavLink>
                                        <NavLink to={`/form/travel-vacation-services`}><div className="main-lists">travel/vac</div></NavLink>
                                        <NavLink to={`/form/writing-editing-translation`}><div className="main-lists">write/ed/tran</div></NavLink>
                                    </div>
                                </div>
                            </div>
                    <div className="main-box col-lg-4">
                                <NavLink to={`/type/sale`}><div id="sale" className="main-heading d-none d-lg-block" onClick={toggleListHandler}>for sale</div></NavLink>
                                <div id="sale" className="main-heading d-lg-none" onClick={toggleListHandler}>for sale</div>
                                    <div className={`main-lists-container row ${showSaleList ? '' : 'main-hide'}`}>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/type/sale`}><div id="sale" className="main-lists d-lg-none" onClick={toggleListHandler}>all sale</div></NavLink>
                                        <NavLink to={`/form/antiques`}><div className="main-lists">antiques</div></NavLink>
                                        <NavLink to={`/form/appliances`}><div className="main-lists">appliances</div></NavLink>
                                        <NavLink to={`/form/arts-crafts`}><div className="main-lists">arts&crafts</div></NavLink>
                                        <NavLink to={`/form/atvs-utvs-snowmobiles`}><div className="main-lists">atc/utv/sno</div></NavLink>
                                        <NavLink to={`/form/auto-parts`}><div className="main-lists">auto parts</div></NavLink>
                                        <NavLink to={`/form/aviation`}><div className="main-lists">aviation</div></NavLink>
                                        <NavLink to={`/form/baby-kid-stuff`}><div className="main-lists">baby&kid</div></NavLink>
                                        <NavLink to={`/form/barter`}><div className="main-lists">barter</div></NavLink>
                                        <NavLink to={`/form/health-beauty`}><div className="main-lists">beauty&health</div></NavLink>
                                        <NavLink to={`/form/bicycle-parts`}><div className="main-lists">bike parts</div></NavLink>
                                        <NavLink to={`/form/bicycles`}><div className="main-lists">bikes</div></NavLink>
                                        <NavLink to={`/form/boat-parts`}><div className="main-lists">boat parts</div></NavLink>
                                        <NavLink to={`/form/boats`}><div className="main-lists">boats</div></NavLink>
                                        <NavLink to={`/form/books-magazines`}><div className="main-lists">books</div></NavLink>
                                        <NavLink to={`/form/business-commercial`}><div className="main-lists">business</div></NavLink>
                                        <NavLink to={`/form/cars-trucks`}><div className="main-lists">cars&trucks</div></NavLink>
                                        <NavLink to={`/form/cds-dvds-vhs`}><div className="main-lists">cds/dvd/vhs</div></NavLink>
                                        <NavLink to={`/form/cell-phones`}><div className="main-lists">cell phones</div></NavLink>
                                        <NavLink to={`/form/clothing-accessories`}><div className="main-lists">clothes&acc</div></NavLink>
                                        <NavLink to={`/form/collectibles`}><div className="main-lists">collectibles</div></NavLink>
                                        <NavLink to={`/form/computer-parts`}><div className="main-lists">computer parts</div></NavLink>
                                        <NavLink to={`/form/computers`}><div className="main-lists">computers</div></NavLink>
                                        <NavLink to={`/form/electronics`}><div className="main-lists">electronics</div></NavLink>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/form/`}><div className="main-lists">farm&garden</div></NavLink>
                                        <NavLink to={`/form/free-stuff`}><div className="main-lists">free</div></NavLink>
                                        <NavLink to={`/form/furniture`}><div className="main-lists">furniture</div></NavLink>
                                        <NavLink to={`/form/garage-moving`}><div className="main-lists">garage sale</div></NavLink>
                                        <NavLink to={`/form/general`}><div className="main-lists">general</div></NavLink>
                                        <NavLink to={`/form/heavy-equipment`}><div className="main-lists">heavy equip</div></NavLink>
                                        <NavLink to={`/form/household`}><div className="main-lists">household</div></NavLink>
                                        <NavLink to={`/form/jewelly`}><div className="main-lists">jewelry</div></NavLink>
                                        <NavLink to={`/form/materials`}><div className="main-lists">materials</div></NavLink>
                                        <NavLink to={`/form/motorcycle-parts`}><div className="main-lists">motorcycle parts</div></NavLink>
                                        <NavLink to={`/form/motorcycles-scooter`}><div className="main-lists">motorcycles</div></NavLink>
                                        <NavLink to={`/form/musical-instruments`}><div className="main-lists">music instr</div></NavLink>
                                        <NavLink to={`/form/photo-video`}><div className="main-lists">photo&video</div></NavLink>
                                        <NavLink to={`/form/rvs`}><div className="main-lists">rvs&camp</div></NavLink>
                                        <NavLink to={`/form/sporting-goods`}><div className="main-lists">sporting</div></NavLink>
                                        <NavLink to={`/form/tickets`}><div className="main-lists">tickets</div></NavLink>
                                        <NavLink to={`/form/tools`}><div className="main-lists">tools</div></NavLink>
                                        <NavLink to={`/form/toys-games`}><div className="main-lists">toys&games</div></NavLink>
                                        <NavLink to={`/form/trailers`}><div className="main-lists">trailers</div></NavLink>
                                        <NavLink to={`/form/video-gaming`}><div className="main-lists">video gaming</div></NavLink>
                                        <NavLink to={`/form/wanted`}><div className="main-lists">wanted</div></NavLink>
                                        <NavLink to={`/form/auto-wheels-tires`}><div className="main-lists">wheels&tires</div></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                        <div className=" row">
                            <div className="main-box col-lg-4 main-gigs">
                                <NavLink to={`/type/gigs`}><div id="gigs" className="main-heading d-none d-lg-block" onClick={toggleListHandler}>gigs</div></NavLink> 
                                <div id="gigs" className="main-heading d-lg-none" onClick={toggleListHandler}>gigs</div>
                                <div className={`main-lists-container row ${showGigsList ? '' : 'main-hide'}`}>
                                    <div className="col-12 col-lg-6 ">
                                        <NavLink to={`/type/gigs`}><div id="gigs" className="main-lists d-lg-none" onClick={toggleListHandler}>all gigs</div></NavLink>
                                        <NavLink to={`/form/computer-gigs`}><div className="main-lists">computer</div></NavLink>
                                        <NavLink to={`/form/creative-gigs`}><div className="main-lists">creative</div></NavLink>
                                        <NavLink to={`/form/crew-gigs`}><div className="main-lists">crew</div></NavLink>
                                        <NavLink to={`/form/domestic-gigs`}><div className="main-lists">domestic</div></NavLink>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <NavLink to={`/form/events`}><div className="main-lists">event</div></NavLink>
                                        <NavLink to={`/form/labor-gigs`}><div className="main-lists">labor</div></NavLink>
                                        <NavLink to={`/form/talent-gigs`}><div className="main-lists">talent</div></NavLink>
                                        <NavLink to={`/form/writing-gigs`}><div className="main-lists">writing</div></NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                <div className=" row">
                    <div className="main-box col-lg-4" style={{ height: "3vh" }}>
                                <NavLink to={`/type/resumes`}><div id="resumes" className="main-heading" onClick={toggleListHandler}>resumes</div></NavLink>
                    </div>
                </div>
            </div>
                    <div className="main-etc col-md-2 col-sm-2 d-none d-md-block center" style={{color: 'blue'}}> 
                        <p className="center" style={{ marginTop: '10px' }}>about</p>
            </div>
                </div>
            </main>
        </>
    );
};

export default Home;