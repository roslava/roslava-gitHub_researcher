import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import classes from './Paginator.module.scss';
import './Paginator.scss';
import Card from "../../containers/CardContainer";
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import Helpers from '../../helpers/Helpers'
import DropDownPagesQuantity from "../../containers/DropDownPagesQuantityContainer";
import {setPageNumber} from "../../actions/rootactions";





const Paginator = ({repositories, selectRepository, inputVal, dataFrom, repoQuantityPerPage, setPageNumber,currentPageNumber }) => {
    const repos = repositories.slice(0, 30);
    const pageNumber = currentPageNumber
    //pageNumber это currentPageNumber и установить setPageNumber


    // const reposPerPage = repoQuantityPerPage;
    // console.log('f', typeof (repoQuantityPerPage))
    const reposPerPage = repoQuantityPerPage;
    const pagesVisited = pageNumber * reposPerPage;

    const displayRepos = repos
        .slice(pagesVisited, pagesVisited + reposPerPage)
        .map((repo, index) => {
            return (
                <Card dataFrom={dataFrom} repositories={repositories} repo={repo} action={selectRepository} actionProps={repo} key={index}/>
            );
        });

    const pageCount = Math.ceil(repos.length / repoQuantityPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }



    const whenWasTheSearch = (dataFrom, inputVal, repositories) => {
        if(dataFrom === 'fromStore'){
            return (<div><p>Вы искали <span>{inputVal}</span></p>
                <p>Количество найденных репозиториев: <span>{repositories.length}</span></p>
                {/*<p className={classes.delete} onClick={()=>{clearAllRepos()}}>Удалить результаты поиска</p>*/}
            </div>)
        }else if(dataFrom === 'fromLocalStorage'){
            return (<div><p>Недавно вы искали <span>{Helpers.getLocalStorageData('searchInputValue')}</span></p>
                <p>Количество найденных репозиториев: <span>{Helpers.getLocalStorageData('repositories').length}</span></p>
                {/*<p className={classes.delete} onClick={()=>{localStorage.clear()}}>Удалить результаты поиска</p>*/}
            </div>)
        }
      }

    return (
        <div className={classes.block}>

            {displayRepos}

            <div className={classes.bottomwrapper}>
                <DropDownPagesQuantity repos={repos}/>
                <div className={classes.buttonswrapper}>
                    <ReactPaginate
                        previousLabel={<BsChevronLeft size={50}/>}
                        nextLabel={<BsChevronRight size={50}/>}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                        pageRangeDisplayed={3}
                    />
                </div>

                <div className={classes.searchDetails}>
                    {whenWasTheSearch(dataFrom, inputVal, repositories)}
                </div>

            </div>
        </div>
    );
}

export default Paginator;