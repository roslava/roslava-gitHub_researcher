import React, {useState} from 'react';
import classes from './Paginator.module.scss';
import './Paginator.scss';
import Card from "../../containers/CardContainer";
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import Helper from '../../Helpers/Helper'
import DropDownPagesQuantity from "../../containers/DropDownPagesQuantityContainer";
import usePagination from "../../hooks/usePagination";


const Paginator = ({
                       repositories,
                       selectRepository,
                       inputVal,
                       dataFrom,
                       repoQuantityPerPage,
                   }) => {


    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage: repoQuantityPerPage,
        count: repositories.length,
    });


    if (page > totalPages && totalPages > 0) {
        setPage(totalPages)
    }

    const displayRepos = repositories
        .slice(firstContentIndex, lastContentIndex)
        .map((repo, index) => {
            return (
                <Card dataFrom={dataFrom} repositories={repositories} repo={repo} action={selectRepository}
                      actionProps={repo} key={index}/>
            );
        });


    if(!Helper.getLocalStorageData('currentPage') && page === 0){
        setPage(1)
    }

    if(Helper.getLocalStorageData('currentPage') && page === 0){
        setPage(Helper.getLocalStorageData('currentPage'))
    }


    if(page > 1){
        Helper.setLocalStorageData('currentPage', page)
    }else if(page === 1 && Helper.getLocalStorageData('currentPage') ){
        localStorage.removeItem('currentPage')
    }


    function whatIfItIsReloads(){
        if(Helper.getLocalStorageData('currentPage')){
            setPage(Number(Helper.getLocalStorageData('currentPage' )))
        }else if(!Helper.getLocalStorageData('currentPage')){
            setPage(1)
        }
    }

    window.addEventListener('load', ()=>whatIfItIsReloads());


    const whenWasTheSearch = (dataFrom, inputVal, repositories) => {
        if (dataFrom === 'fromStore') {
            return (<div><p>Вы искали <span>{inputVal}</span></p>
                <p>Количество найденных <span><br/></span> репозиториев: <span>{repositories.length}</span></p>
                      </div>)
        } else if (dataFrom === 'fromLocalStorage') {
            return (<div><p>Недавно вы искали <span>{Helper.getLocalStorageData('searchInputValue')}</span></p>
                <p>Количество найденных репозиториев: <span>{Helper.getLocalStorageData('repositories').length}</span>
                </p>
                    </div>)
        }
    }

    return (
        <div className={classes.block} id='paginatorBlock'>


            {displayRepos}


            <div className={classes.bottomwrapper}>

                <DropDownPagesQuantity repos={repositories}/>
                <p className={classes.total}> {page}/{totalPages}</p>


                <div className={classes.buttonswrapper}>


                    <div className={classes.buttons}>
                        <div className="navButtonWrapper">

                            <button onClick={prevPage} className="paginationBttns previousBttn">
                                <BsChevronLeft size={'22px'}/>
                            </button>
                            {/* @ts-ignore */}
                            {[...Array(totalPages).keys()].map((el) => (
                                <button
                                    onClick={() => setPage(el + 1)}
                                    key={el}
                                    className={`paginationBttns ${page === el + 1 ? "activePage" : ""}`}
                                >
                                    {el + 1}
                                </button>
                            ))}
                            <button onClick={nextPage} className="paginationBttns nextBttn">
                                <BsChevronRight size={'22px'}/>
                            </button>
                        </div>

                    </div>


                </div>



                <div className={classes.searchDetails}>
                    {whenWasTheSearch(dataFrom, inputVal, repositories)}
                </div>

            </div>
        </div>
    );
}

export default Paginator;