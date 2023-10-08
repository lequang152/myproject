
function Header() {
    return ( 
        <div className="w-[100%] flex">
            <img
                width={300}
                className=""
                src="https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/272148646_686494752370761_3900935881207483190_n.jpg?stp=c0.53.320.320a_dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=PvwjEhe21q0AX8d4O7o&_nc_ht=scontent.fhan17-1.fna&oh=00_AfCI19nHDnaDv2U76rv54dSeL7OuAj7hEpj2Ue1wxn8NWQ&oe=6527CE82" 
                alt="Phương Dung xing gai"
            />
            <div className="flex flex-col flex-grow justify-center items-center bg-slate-400">
                <p className="text-6xl font-bold mb-2">Phương Dung</p>
                <p className="text-6xl font-bold mb-4">Xing gái</p>
                <p className="text-neutral-600">Mỗi tội chưa có người iu</p>
            </div>
        </div>
     );
}

export default Header;