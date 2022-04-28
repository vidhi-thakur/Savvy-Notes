import { CgTag } from 'react-icons/cg';
import { BiArchiveIn } from 'react-icons/bi';
import { FiTrash2, FiHome } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

export const sidebarMenu = [
    {
        name: "home",
        icon: <FiHome />,
        link: "/dashboard"
    },
    {
        name: "labels",
        icon: <CgTag />,
        link: "/label"
    },
    {
        name: "archive",
        icon: <BiArchiveIn />,
        link: "/archive"
    },
    {
        name: "trash",
        icon: <FiTrash2 />,
        link: "/trash"
    },
    {
        name: "profile",
        icon: <CgProfile />,
        link: "/profile"
    },
]