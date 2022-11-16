
const useStyleMotion = (show) => {


    const style= {
        variants: {
            hidden: {
                x: '100vh',
            },
            visible: {
                x: 0,
                scale: 1.2,
            },
            exit: {
                x: '-200vh',
                transition: {duration: .1}
            }

        },
        scaleImg: {

            visible: {
                scale: show ? 1.2 : 1,
                transition: {type: 'spring', stiffness: '500'}
            },
        },
        styleParent: {

            visible: {
                zIndex: show ? 10 : 1
            },
        },
        hoverSkills: {

            hover: {
                scale: 1.1,
                background: '#2d3ddf',
                transition: {yoyo: Infinity,}
            }
        },
        hoverIcons: {

            hover: {
                scale: 1.4,
                transition: {yoyo: Infinity, duration: .3},
            }
        },
        rotateImg: {

            // visible: {
            //     rotate: 360,
            //     transition: {yoyo: Infinity, duration: 2, delay: .5}
            // }
        },
        animateIcons: {
            hidden: {
                x: '-100vw'
            },
            visible: {
                x: 0,
                transition: {delay: .9, duration: .3, ease: 'easeInOut'}
            }
        },
        animateImg: {
            hidden: {
                y: '-100vh'
            },
            visible: {
                y: 0,
                transition: {delay: .5, duration: .3, ease: 'easeInOut', type: 'spring', stiffness: 500}
            }
        },
        animateInfo: {
            hidden: {
                x: '-100vw'
            },
            visible: {
                x: 0,
                transition: {delay: .7, duration: .3, ease: 'easeInOut', type: 'spring', stiffness: 500}
            }
        },
        animationSvg: {

            hover: {
                scale: 1.4,

                transition: {yoyo: Infinity, duration: .3},
            }
        },
        animateStart: {
            hidden: {
                x: '-100vw'
            },
            visible: {
                x: 0,
                transition: {delay: .3, duration: .3, ease: 'easeInOut', type: 'spring', stiffness: 50}
            }
        },
        exitRouter: {
            hidden: {
                scale: .9
            },
            visible: {
                scale: 1,
                opacity: 1

            },
            exit: {
                scale: 1.2,
                opacity: .1,

                transition: {type: 'spring', stiffness: '500'}
            }
        },
        exitRouterProfile: {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1,
                transition: {delay: .3, duration: .2}

            },
            exit: {
                opacity: 0,
                transition: {ease: 'easeInOut'}
            }
        },
        animateShowMore: {
            hidden: {
                scale: 1,
            },
            visible: {
                scale: 1.2,
                transition: {yoyo: Infinity, type: 'spring', stiffness: 200}
            },
            hover: {
                background: 'red',
                scale: 1.5,
                transition: {yoyo: Infinity, type: 'spring', stiffness: 300}
            }
        }
    }


    return style;
};

export default useStyleMotion;