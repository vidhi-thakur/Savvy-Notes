import { GrHomeRounded } from 'react-icons/gr';
import { MdOutlineLabel } from 'react-icons/md';
import { BsArchive } from 'react-icons/bs';
import { FiTrash2 } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';

export const sidebarMenu = [
    {
        name: "home",
        icon: <GrHomeRounded />,
        link: "/dashboard"
    },
    {
        name: "labels",
        icon: <MdOutlineLabel />,
        link: "/label"
    },
    {
        name: "archive",
        icon: <BsArchive />,
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