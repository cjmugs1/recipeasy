import React, { Component } from 'react';

class Sidebar extends Component{
    render(){

        /* sidebar category */

        let categoryData = [
            {categoryLink: "blog-left-sidebar", categoryName: "Renovation"},
            {categoryLink: "blog-left-sidebar", categoryName: "Architecture"},
            {categoryLink: "blog-left-sidebar", categoryName: "Concrete Supply"},
            {categoryLink: "blog-left-sidebar", categoryName: "Laminate Flooring"},
            {categoryLink: "blog-left-sidebar", categoryName: "Consulting"},
            {categoryLink: "blog-left-sidebar", categoryName: "Interior Design"},
            {categoryLink: "blog-left-sidebar", categoryName: "Project Planning"}
        ];

        let categoryDataList = categoryData.map((val, i)=>{
            return(
                <li key={i}><a href={`${process.env.PUBLIC_URL}/${val.categoryLink}`}>{val.categoryName}</a></li>
            )
        });
        
        /* sidebar popular post */
        
        let popularPostData = [
            {postImage: 'sidebar-blog-1.jpg', postTitle: 'What are Groundworkers and what do they do?', postLink: 'blog-details-left-sidebar', postDate: '30 October 2019'},
            {postImage: 'sidebar-blog-2.jpg', postTitle: 'What are Groundworkers and what do they do?', postLink: 'blog-details-left-sidebar', postDate: '30 October 2019'},
            {postImage: 'sidebar-blog-3.jpg', postTitle: 'What are Groundworkers and what do they do?', postLink: 'blog-details-left-sidebar', postDate: '30 October 2019'}
        ];

        let popularPostDataList = popularPostData.map((val, i)=>{
            return(
                <div className="sidebar-blog" key={i}>
                <a href="blog-details-left-sidebar.html" className="image"><img src={`assets/img/blog/${val.postImage}`} alt="" /></a>
                    <div className="content">
                        <h5><a href={`${process.env.PUBLIC_URL}/${val.postLink}`}>What are Groundworkers and what do they do?</a></h5>
                        <span>{val.postDate}</span>
                    </div>
                </div>
            )
        });

        
        /* sidebar tag */
        
        let tagData = [
            {tagLink: "blog-left-sidebar", tagName: "Renovation"},
            {tagLink: "blog-left-sidebar", tagName: "Architecture"},
            {tagLink: "blog-left-sidebar", tagName: "Concrete"},
            {tagLink: "blog-left-sidebar", tagName: "Flooring"},
            {tagLink: "blog-left-sidebar", tagName: "Consulting"},
            {tagLink: "blog-left-sidebar", tagName: "Interior"},
            {tagLink: "blog-left-sidebar", tagName: "Planning"}
        ];

        let tagDataList = tagData.map((val, i)=>{
            return(
                <li key={i}><a href={`${process.env.PUBLIC_URL}/${val.tagLink}`}>{val.tagName}</a></li>
            )
        });

        return(
            <div>
                <div className="sidebar-wrapper">
                    <div className="sidebar">
                        <h3 className="sidebar-title">Search</h3>
                        <div className="sidebar-search">
                            <form action="#">
                                <input type="text" placeholder="Search" />
                                <button><i className="ion-ios-search" /></button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar">
                        <h3 className="sidebar-title">Categories</h3>
                        <ul className="sidebar-list">
                            {categoryDataList}
                        </ul>
                    </div>
                    <div className="sidebar">
                        <h3 className="sidebar-title">Popular Post</h3>
                        {popularPostDataList}
                    </div>
                    <div className="sidebar">
                        <h3 className="sidebar-title">Popular Tags</h3>
                        <ul className="sidebar-tag">
                            {tagDataList}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


export default Sidebar;