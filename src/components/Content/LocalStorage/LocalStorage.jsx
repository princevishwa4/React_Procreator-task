import Search from "../Search/Search";

import "./LocalStorage.css";

import VideoImage from "../../../assets/icons_with background_link.png"
import GalleryImage from "../../../assets/icons_with background_link (2).png"
import MusicImage from "../../../assets/icons_with background_category_core.png"
import ArchieveImage from "../../../assets/icons_with background_link (1).png"

import MenuMusicImage from "../../../assets/icons_with background_category.png"
import MenuGalleryImage from "../../../assets/icons_with background_category (1).png"
import MenuArchieveImage from "../../../assets/icons_with background_category (2).png"
import MenuVideoImage from "../../../assets/icons_with background_link.png"
import MenuIcon from "../../../assets/Combined Shape.png"

const LocalStorage = () =>{
    return(
        <section className="local_storage">
            <div className="wrapper">
                <h2>Local storage</h2>
                <Search />
                <div className="heading_images">
                    <div>
                        <img src={VideoImage} />
                        <p>Video</p>
                    </div>
                    <div>
                        <img src={GalleryImage} />
                        <p>Image</p>
                    </div>
                    <div>
                        <img src={MusicImage} />
                        <p>Music</p>
                    </div>
                    <div>
                        <img src={ArchieveImage} />
                        <p>Archieve</p>
                    </div>
                </div>
                <div className="local_storage_content">
                    <ul>
                        <li>
                            <figure className="content_icon">
                                <img src={MenuMusicImage} />
                            </figure>
                            <div>
                                <h5>Franky Wah - Aftertime</h5>
                                <p>mp3 · 9.2 mb</p>
                            </div>
                            <figure className="menu_icon">
                                <img src={MenuIcon} />
                            </figure>
                        </li>
                        <li>
                            <figure className="content_icon">
                                <img src={MenuGalleryImage} />
                            </figure>
                            <div>
                                <h5>Annie's new car</h5>
                                <p>jpg · 4.8 mb</p>
                            </div>
                            <figure className="menu_icon">
                                <img src={MenuIcon} />
                            </figure>
                        </li>
                        <li>
                            <figure className="content_icon">
                                <img src={MenuArchieveImage} />
                            </figure>
                            <div>
                                <h5>Top secret archive</h5>
                                <p>zip · 3.7 gb</p>
                            </div>
                            <figure className="menu_icon">
                                <img src={MenuIcon} />
                            </figure>
                        </li>
                        <li>
                            <figure className="content_icon">
                                <img src={MenuVideoImage} />
                            </figure>
                            <div>
                                <h5>On the top of the world</h5>
                                <p>doc · 2.3 mb</p>
                            </div>
                            <figure className="menu_icon">
                                <img src={MenuIcon} />
                            </figure>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default LocalStorage;