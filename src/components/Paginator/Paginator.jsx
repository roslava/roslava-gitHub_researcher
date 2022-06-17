import React, {useState} from 'react';

import classes from './Paginator.module.scss';
import './Paginator.scss';
import Card from "../../containers/CardContainer";
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import Helper from '../../Helpers/Helper'
import DropDownPagesQuantity from "../../containers/DropDownPagesQuantityContainer";
import usePagination from "../../hooks/usePagination";
import helper from "../../Helpers/Helper";


const Paginator = ({
                       repositories,
                       selectRepository,
                       inputVal,
                       dataFrom,
                       repoQuantityPerPage,
                       setPageNumber,
                       currentPageNumber
                   }) => {


    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
        setPageSAFE
    } = usePagination({
        contentPerPage: repoQuantityPerPage,
        count: repositories.length,
    });


    if (page > totalPages && totalPages > 1) {
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

// console.log('fffffff',page)



            if (page > 1) {
                 Helper.setLocalStorageData('currentPage', page)
                console.log('пишем')
            }

            if (Helper.getLocalStorageData('currentPage' )){
                window.addEventListener('load', ()=>setPage( Number(Helper.getLocalStorageData('currentPage' ))));
            }













    //
    // if(window.performance){
    //
    // }






    const whenWasTheSearch = (dataFrom, inputVal, repositories) => {
        if (dataFrom === 'fromStore') {
            return (<div><p>Вы искали <span>{inputVal}</span></p>
                <p>Количество найденных <span><br/></span> репозиториев: <span>{repositories.length}</span></p>
                {/*<p className={classes.delete} onClick={()=>{clearAllRepos()}}>Удалить результаты поиска</p>*/}
            </div>)
        } else if (dataFrom === 'fromLocalStorage') {
            return (<div><p>Недавно вы искали <span>{Helper.getLocalStorageData('searchInputValue')}</span></p>
                <p>Количество найденных репозиториев: <span>{Helper.getLocalStorageData('repositories').length}</span>
                </p>
                {/*<p className={classes.delete} onClick={()=>{localStorage.clear()}}>Удалить результаты поиска</p>*/}
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