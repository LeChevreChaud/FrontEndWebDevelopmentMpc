import React, { Fragment } from 'react';
import { CategorySearch } from '../../common/models/SearchProduct';
import { Form } from 'react-bootstrap';

interface ISidebarProps {
    categories: Array<CategorySearch>
    selectedCategory : string
    selectedSubCategory : Array<string>
    addFilterCategory:(category?:string) => any
    removeFilterSubategory: (subcategory: string) => any
    addFilterSubcategory: (subcategory: string, category? :string) => any
}

class Sidebar extends React.Component<ISidebarProps> {

    checkedCategory = (category : string) => {
        if(this.props.selectedCategory === category){return true}
        return false;
    }

    checkedSubcategory = (subcategory : string) => {
        if(this.props.selectedSubCategory && this.props.selectedSubCategory.includes(subcategory)){return true}
        return false;
    }

    onSelectCategory = (evt:any, category:string) =>{
        if(evt.target.checked){
            this.props.addFilterCategory(category);
        }else{
            this.props.addFilterCategory();
        } 
    }

    /* *rubic26*
    Add and remove filter for a subcategory */
    onSelectSubategory = (evt : any, subcategory : string, category:string) =>{
        if(evt.target.checked){
            this.props.addFilterSubcategory(subcategory, category);
        }else{
            this.props.removeFilterSubategory(subcategory);
        }    
    }


    renderNavItem = (category: CategorySearch) => {
        return <ul className="sidebar-category">
            <li>
                {/* *rubic15*
                User can see selected category name on the sidebar */}
                <Form.Check checked={this.checkedCategory(category.category)} onChange={(evt:any) => this.onSelectCategory(evt, category.category)} label={category.category}/>
                <ul>
                    {category.subcategories.map(x =><li><Form.Check checked={this.checkedSubcategory(x.name)} onChange={(e:any) => this.onSelectSubategory(e, x.name, category.category)} label={x.name}/></li>)}
                </ul>
            </li>
        </ul>
    }

    render() {
        const { categories } = this.props;
        return (
            // *rubic14*
            // Controls bar with the category and subcategory selected
            
            <div className="products-sidebar">
                {categories.map(x => this.renderNavItem(x))}
            </div>
        );
    }
}

export default Sidebar;

