import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import classes from './Paginator.module.scss';
import './Paginator.scss';
import Card from "../../containers/CardContainer";
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Helpers from '../../helpers/Helpers'


const Paginator = ({repositories, selectRepository, inputVal, dataFrom}) => {
    const [pageNumber, setPageNumber] = useState(0);
    const repos = repositories.slice(0, 30)
    const [quantityOnPage, setQuantityOnPage] = useState(6);
    const reposPerPage = quantityOnPage;
    const pagesVisited = pageNumber * reposPerPage;
    const displayRepos = repos.slice(pagesVisited, pagesVisited + reposPerPage);
    const pageCount = Math.ceil(repos.length / reposPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    const options = [
        '6', '9', '11'
    ]





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

            {
                displayRepos.map((repo, index) => {

                    return (

                        <Card dataFrom={dataFrom} repositories={repositories} repo={repo} action={selectRepository} actionProps={repo} key={index}/>
                    );
                })}

            <div className={classes.bottomwrapper}>
                <div className={classes.dropdownwrapper}>
                    <Dropdown options={options}
                              onChange={(options) => {
                                  setQuantityOnPage(options.value)
                              }}
                              placeholder={quantityOnPage}/>
                </div>
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