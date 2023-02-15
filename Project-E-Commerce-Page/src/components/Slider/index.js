import React, { useEffect, useState } from 'react';
import styles from './style.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
import slider1 from '../../products/Slider/slider1.png'
import slider2 from '../../products/Slider/slider2.png'
import slider3 from '../../products/Slider/slider3.png'
import slider4 from '../../products/Slider/slider4.png'
import slider5 from '../../products/Slider/slider5.png'

const Slider = () => {
    const sliderImages = [slider1, slider2, slider3, slider4, slider5];
    const [isActive, setIsActive] = useState([true, ...[...Array(sliderImages.length - 1).keys()].map(() => false)]);
    useEffect(() => {
        const intervalId = setInterval(() => {
            handleIsActive('right');
        }, 5000);

        return () => clearInterval(intervalId);
    }, [isActive]);
    const handleIsActive = (direction) => {
        const indexOfTrue = isActive.indexOf(isActive.find(itemStyle => itemStyle === true));
        if (indexOfTrue === isActive.length - 1 && direction === 'right') {
            setIsActive([true, ...[...Array(sliderImages.length - 1).keys()].map(() => false)])
            return
        }
        if (indexOfTrue === 0 && direction === 'left') {
            setIsActive([...[...Array(sliderImages.length - 1).keys()].map(() => false), true])
            return
        }
        else {
            let x;
            direction === 'right' ? x = indexOfTrue + 1 : x = indexOfTrue - 1;
            setIsActive(isActive.map((item, i) => i === x ? item = true : item = false))
        }
    };
    const styleSlider = (imgIndex) => {
        const mystyle = {
            paddingTop: '126px',
            backgroundImage: `url(${sliderImages[imgIndex]})`,
            backgroundSize: 'cover',
            transition: '1s'
        };
        return mystyle;
    }
    function scrollToComponent() {
        scroll.scrollTo("#shopID", {
            duration: 700,
            smooth: true
        });
    }
    return (
        <div id='slider' style={styleSlider(isActive.indexOf(isActive.find(itemStyle => itemStyle === true)))}>
            <div className={styles.SlidesContainer}>
                <div className={`${styles.LeftArrow} ${styles.arrowHover}`} onClick={() => handleIsActive('left')}>
                    <div className={`${styles.arrow} ${styles.left}`}>
                    </div>
                </div>

                <div className={`${styles.RightArrow} ${styles.arrowHover}`} onClick={() => handleIsActive('right')}>
                    <div className={`${styles.arrow} ${styles.right}`}>
                    </div>
                </div>

                <div className={styles.content}>
                    <span className={styles.MySpan}>Perfume Tips <br></br>Tricks</span>
                    <Link
                        activeClass="active"
                        to='shopID'
                        spy={true}
                        smooth={true}
                        duration={700}
                    >
                        <button className={styles.MyButton} onClick={scrollToComponent}>shop now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default Slider;