
export const MenuItems = [
    // {
    //     title: 'Home',
    //     url: 'http://localhost:3000/',
    //     cName: 'nav-links'
    // },
    // {
    //     title: 'Serviços',
    //     url: '#',
    //     cName: 'nav-links'
    // },
    {
        title: 'Login',
        url: '/Login',
        cName: 'nav-links'
    },
    {
        title: 'About',
        url: '/AboutPage',
        cName: 'nav-links',
        ID : 'some-id'
    },
    {
        title: 'Cadastre',
        url: '/SignUP',
        cName: 'nav-links'
    }

]

// Fiz esse export para aparecer apenas "Home" na Navbar.
// Além disso, fiz um novo arquivo.js chamado "NavbarAlt.js" para 
// exportar essa nova Navbar.
export const MenuItemsAlt = [
    {
        title: 'Home',
        url: 'http://localhost:3000/',
        cName: 'nav-linksAlt'
    },
]