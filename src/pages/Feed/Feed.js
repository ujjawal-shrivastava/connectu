import React from 'react'
import FeaturedPost from './Components/FeaturedPost/FeaturedPost'
import News from './Components/News/News'
import Post from './Components/Post/Post'
import SearchBar from './Components/SearchBar/SearchBar'
import WritePost from './Components/WritePost/WritePost'

export default function Feed() {
    return (
        <div className="w-100 py-4 px-2 d-flex justify-content-center">
            <div className="px-4 py-3" style={{ width: "20%" }}>
                <News />
            </div>
            <div className="flex-grow-1 text-center py-3 px-2" style={{maxWidth:"60%"}}>
                <div className="w-100 d-flex flex-column align-items-center">
                    <SearchBar />
                    <WritePost />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <div className="px-4 py-3" style={{ width: "20%" }}>
                <FeaturedPost />
            </div>
        </div>
    )
}
