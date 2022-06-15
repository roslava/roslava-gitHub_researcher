import React, {useState} from 'react';
import ReactPaginate from "react-paginate";
import classes from './Paginator.module.scss';
import './Paginator.scss';
import Card from "../../containers/CardContainer";
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import Helpers from '../../helpers/Helpers'
import DropDownPagesQuantity from "../../containers/DropDownPagesQuantityContainer";



const Paginator = ({repositories, selectRepository, inputVal, dataFrom, repoQuantityPerPage, setPageNumber, currentPageNumber }) => {
    const repos = repositories.slice(0, 30);
    const pageNumber = currentPageNumber
    const reposPerPage = repoQuantityPerPage;
    const pagesVisited = pageNumber * reposPerPage;
    // console.log('количество репозиториев', repos.length)
    // console.log('количество репозиториев позади', pagesVisited)
    // console.log('количество репозиториев до + текущая страница', pagesVisited + reposPerPage)
    //
    // console.log('количество страниц позади', currentPageNumber)
    // console.log('eeee', currentPageNumber)



    if(pagesVisited + reposPerPage > repos.length){
        const sss = repos.length % currentPageNumber
        // console.log('должна быть страница?',sss)
    }


    const displayRepos = repos
        .slice(pagesVisited, pagesVisited + reposPerPage)
        .map((repo, index) => {
            return (
                <Card dataFrom={dataFrom} repositories={repositories} repo={repo} action={selectRepository} actionProps={repo} key={index}/>
            );
        });

    function pageCount_(repoQuantityPerPage){
        return  Math.ceil(repos.length / repoQuantityPerPage);
    }

    const pageCount = Math.ceil(repos.length / repoQuantityPerPage);

    const changePage = ({selected}) => {
            setPageNumber(selected);

   }

    const onPageActive = ({selected}) => {
        setPageNumber(selected);

    }

    // onPageActive?(selectedItem: { selected: number }): void;



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
                        pageCount={pageCount_(repoQuantityPerPage)}
                        onPageChange={changePage}
                        onPageActive={onPageActive }
                        containerClassName={'paginationBttns'}
                        previousLinkClassName={'previousBttn'}
                        nextLinkClassName={'nextBttn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                        pageRangeDisplayed={3}
                        breakLabel={'ddd'}
                        // marginPagesDisplayed={22}
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