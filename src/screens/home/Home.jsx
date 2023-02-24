import React, { useEffect, useState } from "react";
import { Empty } from 'antd';
import { connect } from "react-redux";

import {
    Logo, Slider, TabButton, Budget, PlayerCard, Filter, Pagination,
    Spacing, PlayerDetail, TradeModal, InvalidModal, Animation, Notification
} from "../../components";
import {
    openNotEnoughtMoneyModal, openPlayerDetailsModal, openTradeModal,
    getMarketData, getMyCardsData, getBudgetData, getPlayerDetailsData, buyCard,
    sellCard, closeTradeModal, closePlayerDetailsModal, sortMarketData
} from "../../redux/actions";

import "./Home.css";

const mapStatetoProps = states => {
    return {
        tradeModal: states.modalReducer.tradeModal,
        notEnoughtMoneyModal: states.modalReducer.notEnoughtMoneyModal,
        playerDetailsData: states.dataReducer.playerDetailsData,
        marketData: states.dataReducer.marketData,
        myCardsData: states.dataReducer.myCardsData,
        budget: states.dataReducer.budgetData,
        playerDetailsModal: states.modalReducer.playerDetailsModal,
        filteredMarketData: states.dataReducer.filteredMarketData,
        filteredMyCardsData: states.dataReducer.filteredMyCardsData,
    }
};

const mapDispatchToProps = (dispatch) => ({ dispatch });

const Home = connect(
    mapStatetoProps,
    mapDispatchToProps,
)(props => {

    const {
        dispatch, playerDetailsData, marketData,
        budget, filteredMarketData, filteredMyCardsData
    } = props;

    const pageListStep = 10;
    const [marketPageNumber, setMarketPageNumber] = useState(1);
    const [myCardsPageNumber, setMyCardsPageNumber] = useState(1);
    const [isAnimation, setIsAnimation] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsAnimation(false);
        }, 2000);
        dispatch(getMarketData());
        dispatch(getMyCardsData());
        dispatch(getBudgetData());
    }, []);

    const openPlayerDetail = async (index) => {
        await dispatch(getPlayerDetailsData(index));
        dispatch(openPlayerDetailsModal());
    };

    const playerTradeButtonName = (index) => {
        return marketData.some((player) => player.id === index) === false ? "Sell" : "Buy";
    };

    const canTradeCard = (id) => {
        dispatch(getPlayerDetailsData(id));
        if (playerTradeButtonName(id) === "Buy") {
            const player = marketData.find((player) => player.id === id);
            if (player.price > Number(budget.budget)) {
                dispatch(openNotEnoughtMoneyModal());
            } else {
                dispatch(openTradeModal());
            };
        } else {
            dispatch(openTradeModal());
        }
    };

    const cardTradeFunction = (id) => {
        if (playerTradeButtonName(id) === "Buy") {
            dispatch(buyCard(id));
            Notification("Success", "You have successfully bought a player card");
        } else {
            dispatch(sellCard(id));
            dispatch(sortMarketData());
            Notification("Success", "You have successfully sold a player card");
        };
        isUpdatePageNumber();
        dispatch(closeTradeModal());
        dispatch(closePlayerDetailsModal());
    };

    const isUpdatePageNumber = () => {
        if ((filteredMarketData.length % pageListStep === 1 && marketPageNumber > 1) || (filteredMarketData.length % pageListStep === 0 && marketPageNumber > 1) || (filteredMarketData.length >= 10)) {
            setMarketPageNumber(1);
        };
        if ((filteredMyCardsData.length % pageListStep === 1 && myCardsPageNumber > 1) || (filteredMyCardsData.length % pageListStep === 0 && myCardsPageNumber > 1) || (filteredMarketData.length >= 10)) {
            setMyCardsPageNumber(1);
        };
    };

    return (
        <div className="home" id="home-page">
            <div id="mycards">
                <div className="home-header" >
                    <div className="home-header-left">
                        <Logo />
                        <TabButton />
                    </div>
                    <div className="">
                        <Budget budget={budget} />
                    </div>
                </div>
                <Spacing spacing={61} />
                <Slider />
                <Spacing spacing={30.5} />
                <div className="home-content">
                    <span className="large-normal-bold">MY CARDS</span>
                    <div className="home-content-details">
                        <div className="home-content-details-top">
                            <Filter whichRunFilterMethod={"myCards"} isUpdatePageNumber={isUpdatePageNumber} />
                            <div className="home-card-content">
                                {
                                    filteredMyCardsData.length === 0 && <Empty description={"No player card"} style={{ marginTop: "150px" }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                                }
                                <ul className="home-card-list">
                                    {
                                        filteredMyCardsData.slice(
                                            (myCardsPageNumber - 1) * pageListStep,
                                            myCardsPageNumber * pageListStep
                                        ).map((player, index) => {
                                            return (
                                                <li key={index}>
                                                    <PlayerCard
                                                        playerImage={player.photoUrl}
                                                        buttonName={"Sell"}
                                                        playerPrice={player.price}
                                                        buttonFunction={() => {
                                                            canTradeCard(player.id);
                                                        }}
                                                        cardFunction={() => {
                                                            openPlayerDetail(player.id);
                                                        }}
                                                    />
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="home-content-details-bottom">
                            {
                                filteredMyCardsData.length > pageListStep && <Pagination
                                    setPageNumber={setMyCardsPageNumber} pageNumber={myCardsPageNumber}
                                    dotPiece={Math.ceil(filteredMyCardsData.length / pageListStep)}
                                />
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Spacing spacing={0} />
            <div className="home-content" id="market">
                <span className="large-normal-bold">MARKET</span>
                <div className="home-content-details">
                    <div className="home-content-details-top">
                        <Filter whichRunFilterMethod={"market"} isUpdatePageNumber={isUpdatePageNumber} />
                        <div className="home-card-content">
                            {
                                filteredMarketData.length === 0 && <Empty description={"No player card"} style={{ marginTop: "150px" }} image={Empty.PRESENTED_IMAGE_SIMPLE} />
                            }
                            <ul className="home-card-list">
                                {
                                    filteredMarketData.slice(
                                        (marketPageNumber - 1) * pageListStep,
                                        marketPageNumber * pageListStep
                                    ).map((player, index) => {
                                        return (
                                            <li key={index}>
                                                <PlayerCard
                                                    playerImage={player.photoUrl}
                                                    buttonName={"Buy"}
                                                    playerPrice={player.price}
                                                    buttonFunction={() => {
                                                        canTradeCard(player.id);
                                                    }}
                                                    cardFunction={() => {
                                                        openPlayerDetail(player.id);
                                                    }}
                                                />
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="home-content-details-bottom">
                        {
                            filteredMarketData.length > pageListStep && <Pagination
                                setPageNumber={setMarketPageNumber} pageNumber={marketPageNumber}
                                dotPiece={Math.ceil(filteredMarketData.length / pageListStep)}
                            />
                        }
                    </div>
                </div>
            </div>
            <PlayerDetail
                playerDetails={playerDetailsData}
                tradeType={playerTradeButtonName(playerDetailsData.id)}
                canTradeCard={canTradeCard}
            />
            <TradeModal
                playerPrice={playerDetailsData.price}
                tradeType={playerTradeButtonName(playerDetailsData.id)}
                cardId={playerDetailsData.id}
                cardTradeFunction={cardTradeFunction}
            />
            <InvalidModal />
            {
                isAnimation && <Animation />
            }
        </div>
    );
});

export { Home };