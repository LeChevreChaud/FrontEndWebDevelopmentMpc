import React, { Fragment } from 'react';
import { Product } from '../../common/models/Product';
import './index.scss';
import Sidebar from './Sidebar';
import ProductItem from './ProductItem';
import { CategorySearch } from '../../common/models/SearchProduct';
import Filter from './filter';

interface IShoppingProps {
    loadData: (category?: string, subcategory?: string) => any
    loadCategories: () => any
    products: Array<Product>
    categories: Array<CategorySearch>
    loading: boolean
    error: any
    selectedCategory: string
    selectedSubCategory: Array<string>
    sortBy: (type: string) => any
    showOnlyStock: (stocked: boolean) => any
    addFilterCategory: (category?: string) => any
    removeFilterSubategory: (subcategory: string) => any
    addFilterSubcategory: (subcategory: string, category?: string) => any
    filterPrice: (minPrice?: number, maxPrice?: number) => any
    clearFilter: () => any
}

class Shopping extends React.Component<IShoppingProps> {

    componentWillMount = () => {
        this.props.loadCategories();
        this.props.loadData();
    }

    render() {
        return (
            <Fragment>
                {/* *rubic19*
                Menu with all the availaible shopping categories */}
                <Sidebar categories={this.props.categories}
                    addFilterCategory={this.props.addFilterCategory}
                    removeFilterSubategory={this.props.removeFilterSubategory}
                    selectedCategory={this.props.selectedCategory}
                    selectedSubCategory={this.props.selectedSubCategory}
                    addFilterSubcategory={this.props.addFilterSubcategory} />

                <div className="shopping-container">
                    <Filter sortBy={this.props.sortBy} showOnlyStock={this.props.showOnlyStock} filterPrice={this.props.filterPrice} clearFilter={this.props.clearFilter} />
                    {/* *rubic16*
                    total number of items after applying the different filters (category, subcategory, price,...)*/}
                    <div className="counter-row">
                        {this.props.products.length + " products found"}
                    </div>
                    <div className="shopping-content">
                        {/* *rubic20*
                        Grid with the result of the selected category */}
                        {this.props.products && this.props.products.map(prod => <ProductItem productItem={prod} />)}
                    </div>
                </div>
            </Fragment>


        );
    }
}

export default Shopping;

