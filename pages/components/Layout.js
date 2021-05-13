import Head from 'next/head';
const Layout = ({title, keywords, children, description}) => {
    return (
        <div className='font-body bg-grey-100'>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>
            <div className=" flex flex-col justify-center items-center h-vh">
                {children}
            </div>
        </div>
    )
}

Layout.defaultProps={
    title: "Social tool tip",
    keywords: "jsx",
    description: "For a better ui experience"
}

export default Layout;
