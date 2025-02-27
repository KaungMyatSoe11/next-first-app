import React from 'react'

const BlogDetailPage = async ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {

    let id:number = Number((await params).id)
    console.log("slug", id);

    //api fetching


    return (
        <div className="h-[80vh] flex justify-center items-center">
            <h1 className="text-2xl font-bold">{id} Detail Page</h1>
        </div>
    )
}

export default BlogDetailPage