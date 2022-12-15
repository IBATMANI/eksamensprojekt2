const menuItems = [
  {name: 'hjem', url: '/hjem'},
  {name: 'teknologi', url: '/teknologi'},
  {name: 'projekter', url: '/projekter'},
  {name: 'om', url: '/om'},
  {name: 'nyheder', url: '/nyheder'},
];

const menuContainer = document.getElementById('menu-container');
const menuContainerItem = document.getElementById('menu-container-items')

for (const item of menuItems) {

  const menuItem = document.createElement('div');
  menuItem.className = 'menu-item';
  menuItem.innerText = item.name;
  menuItem.onclick = () => {
    window.location.href = item.url;
  };

  menuContainerItem.appendChild(menuItem);
}

const hamburgerToggle = document.createElement('button');
hamburgerToggle.id = 'hamburger-toggle';
hamburgerToggle.innerHTML = '<div></div><div></div><div></div>';
hamburgerToggle.onclick = () => {
  if (menuContainer.style.display === 'block') {
    menuContainer.style.display = 'none';
    hamburgerToggle.classList.remove('open');
  } else {
    menuContainer.style.display = 'block';
    hamburgerToggle.classList.add('open');
  }
};

document.body.appendChild(hamburgerToggle);

