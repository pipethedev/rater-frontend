import React from 'react'
import { Link } from 'react-router-dom';
import { routeList } from '../../assets/data/data';

const Sidebar = () => {
    return (
        <section className={`sidebar hidden sm:block`}>
            <div className={`max-w-[18vw] flex flex-col justify-between transition-all ease-in-out top-0 left-0 bg-[#02123B] text-white h-screen pt-8 duration-300 fixed`}>

                <div className={`pt-3`}>
                    <div className="flex items-center justify-between pb-10 px-5">
                        <p className='text-[#3B71F7] text-xl font-bold'>Findcrest</p>
                        {/* <NotificationIcon className={`cursor-pointer ${!'open' && "scale-0 hidden"}`} /> */}
                    </div>

                    {routeList.map((item, index) => {
                        const activeItem = item.route.includes(location.pathname);
                        // .map((item: any) => location.pathname.includes(item.route) && item.route)[0]
                        // console.log(activeItem, 'ROUTE');
                        const iconArr = [ '1'
                            // <DashboardIcon key={1} index={activeItem} />,
                            // <MusicIcon key={2} index={activeItem} />,
                            // <UserIcon key={3} index={activeItem} />,
                            // <UserIcon key={4} index={activeItem} />,
                            // <TransactionIcon key={5} index={activeItem} />,
                            // <MyProfileIcon key={6} index={activeItem} />,
                            // <SettingsIcon key={7} index={activeItem} />,
                        ]
                        return (
                            <Link to={item.route} key={index} className={`${activeItem && "bg-[#142349] text-[#3B71F7] font-extrabold border-r-4 border-[#3B71F7]"} flex items-center p-3 cursor-pointer my-4 text-lg space-x-3 text-[rgba(255, 255, 255, 0.65)]`}>
                                <div key={item.route}>{iconArr[index]}</div>

                                <span className='origin-left duration-200'>
                                    {item.title}
                                </span>
                            </Link>
                        )
                    }
                    )}
                </div>

            </div>
        </section>
    )
}

export default Sidebar
