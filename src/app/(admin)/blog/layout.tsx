import React from 'react'

const BlogLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            BlogLayout
            {children}
        </div>
    )
}

export default BlogLayout