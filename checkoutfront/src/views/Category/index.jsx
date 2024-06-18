import CategoryCard from '../../components/category/categoryCard';
import useLoading from '../../hooks/useLoading';
import React from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCurrentCategory } from '../../redux/actions';
import CategoryRequest from '../../services/Request/Category';

const CategoryDetail = props => {

    const { currentCategory, setCurrentCategory } = props;
    const [loading, withLoading] = useLoading();

    const { id } = useParams();


    const HandleGetACategory = async () => {
        try {
            const category = await withLoading(CategoryRequest.getACategory(id));
            setCurrentCategory(category?.data);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        HandleGetACategory();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {
                loading && currentCategory ?
                    <h4>Carregando categoria ...</h4>
                    :
                    <div className="container">
                        <CategoryCard category={currentCategory} showMore={false} />
                    </div>
            }
        </>
    )
}

const mapStateToProps = ({ category }) => {
    const { currentCategory } = category;
    return { currentCategory }
}

const mapDispatchToProps = {
    setCurrentCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryDetail);