import { AiOutlineSearch } from 'react-icons/ai'
import { IoStatsChartOutline } from 'react-icons/io5'
import { TbPackages } from 'react-icons/tb'
import { FaArrowsLeftRight } from 'react-icons/fa6'
import { FaMapMarked } from 'react-icons/fa'

export const NavigationListData = [
  {
    id: 1,
    title: 'navigation.item1title' as const,
    Icon: AiOutlineSearch,
    path: '/dashboard/search',
  },
  {
    id: 2,
    title: 'navigation.item2title' as const,
    Icon: IoStatsChartOutline,
    path: '/dashboard/stats',
  },
  {
    id: 3,
    title: 'navigation.item3title' as const,
    Icon: TbPackages,
    path: '/dashboard/send',
  },
  {
    id: 4,
    title: 'navigation.item4title' as const,
    Icon: FaArrowsLeftRight,
    path: '/dashboard/delivery',
  },
  {
    id: 5,
    title: 'navigation.item5title' as const,
    Icon: FaMapMarked,
    path: '/dashboard/modify',
  },
]
