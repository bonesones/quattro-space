import template from './breadcrumbs.html?raw'

const renderBreadCrumbsItem = (item, index) => {
    return `
        <li>
            <a href="${item.href}">
             ${item.title}
            </a>
        </li>
    `
}

export const renderBreadCrumbs = () => {
    return template
}

const mockBreadCrumbs = [
   {
    href: "#",
    title: "Главная"
   },
   {
    href:"/#venues",
    title: "Площадки"
   },
   {
    href:"/shale.html"
   }
]