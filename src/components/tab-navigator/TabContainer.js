import TabItem from './TabItem';
// import { Outlet } from 'react-router';

function TabContainer({ children }) { // destructuring the props and taking 'children' prop
    return (
        <div className='tab-navigator'>
            <div className='tab-container'>
                {
                    getTabs().map(({ title, url }) => <TabItem
                        title={title}
                        url={url}
                        key={title}
                    />)
                }
            </div>
            {children}
        </div>
    )
}

function getTabs() {
    return [
        {
            title: 'Home',
            url: '/'
        },
        {
            title: 'Create News',
            url: '/news-create'
        },
        {
            title: 'Login',
            url: '/login'
        },
    ]
}

export default TabContainer;