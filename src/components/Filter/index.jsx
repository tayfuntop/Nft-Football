import React, { useEffect, useState } from "react";
import { Slider } from 'antd';
import { connect } from "react-redux";

import { filterTypeMarketData, filterTypeMyCardsData } from "../../redux/actions";

import "./index.css";
import "../../configs/fonts/Text.css";
import ArrowDown from "../../assets/icons/arrow-up.svg";
import ArrowUp from "../../assets/icons/arrow-down.svg";

const mapStatetoProps = states => {
    return {
        marketData: states.dataReducer.marketData,
        myCardsData: states.dataReducer.myCardsData,
        filterTypeMarketData: states.dataReducer.filterTypeMarketData,
        filterTypeMyCardsData: states.dataReducer.filterTypeMyCardsData,
    }
};
const mapDispatchToProps = (dispatch) => ({ dispatch });

const Filter = connect(
    mapStatetoProps,
    mapDispatchToProps
)(
    props => {

        const { dispatch, marketData, myCardsData, whichRunFilterMethod, isUpdatePageNumber } = props;

        const filterList = {
            cardType: [
                "Gold",
                "Silver",
                "Bronze",
            ],
            position: [
                "Goalkeeper",
                "Defender",
                "Midfielder",
                "Forward",
            ]
        };
        
        const [isOpen, setIsOpen] = useState({
            cardType: true,
            position: true,
            price: true,
        });

        const [isSelect, setIsSelect] = useState({
            cardType: {
                gold: false,
                silver: false,
                bronze: false,
            },
            position: {
                goalkeeper: false,
                defender: false,
                midfielder: false,
                forward: false,
            },
            price: {
                min: 0,
                max: 30,
            }
        });

        useEffect(() => {
            if (whichRunFilterMethod === "market") {
                dispatch(filterTypeMarketData(isSelect));
            } else if (whichRunFilterMethod === "myCards") {
                dispatch(filterTypeMyCardsData(isSelect));
            }
            isUpdatePageNumber();
        }, [isSelect, marketData, myCardsData]);
        
        return (

            <div className="filter">
                <div className="filter-category bottom-solid">
                    <div onClick={() => setIsOpen({ ...isOpen, cardType: !isOpen.cardType })} className="filter-title">
                        <span className="title regular-normal-regular">Card Type</span>
                        <img src={isOpen.cardType ? ArrowDown : ArrowUp} alt="" />
                    </div>
                    <ul className={!isOpen.cardType ? "hidden" : undefined}>
                        {
                            filterList.cardType.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => {
                                        setIsSelect(
                                            {
                                                ...isSelect, cardType: {
                                                    ...isSelect.cardType,
                                                    [item.toLowerCase()]: !isSelect.cardType[item.toLowerCase()],
                                                }
                                            }
                                        );
                                    }}
                                        className={`filter-content regular-normal-${isSelect.cardType[item.toLowerCase()] ?
                                            "bold active" : "regular"}`}>{item} <span>{`(13)`}</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="filter-category  bottom-solid">
                    <div onClick={() => setIsOpen({ ...isOpen, position: !isOpen.position })} className="filter-title">
                        <span className="title regular-normal-regular">Position</span>
                        <img src={isOpen.position ? ArrowDown : ArrowUp} alt="" />
                    </div>
                    <ul className={!isOpen.position ? "hidden" : undefined}>
                        {
                            filterList.position.map((item, index) => {
                                return (
                                    <li key={index} onClick={() => setIsSelect(
                                        {
                                            ...isSelect, position: {
                                                ...isSelect.position, [item.toLowerCase()]: !isSelect.position[item.toLowerCase()],
                                            }
                                        }
                                    )}
                                        className={`filter-content regular-normal-${isSelect.position[item.toLowerCase()] ?
                                            "bold active" : "regular"}`}>{item} <span>{`(13)`}</span>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="filter-category">
                    <div onClick={() => setIsOpen({ ...isOpen, price: !isOpen.price })} className="filter-title">
                        <span className="title regular-normal-regular">Price</span>
                        <img src={isOpen.price ? ArrowDown : ArrowUp} alt="" />
                    </div>
                    <div className={!isOpen.price ? "hidden" : undefined}>
                        <div className="price-infos">
                            <span className="tiny-normal-bold price">{`€ ${isSelect.price.min}.00`}</span>
                            <span className="tiny-normal-bold price">{`€ ${isSelect.price.max}.00`}</span>
                        </div>
                        <Slider
                            onChange={(value) => setIsSelect({ ...isSelect, price: { min: value[0], max: value[1] } })}
                            tooltip={{ open: false }}
                            trackStyle={{ backgroundColor: "#E8282B" }}
                            railStyle={{ backgroundColor: "#E3E5E5" }}
                            range={{
                                draggableTrack: true,
                            }}
                            max={30}
                            defaultValue={[0, 30]}
                        />
                    </div>
                </div>
            </div>
        );
    });

export { Filter };