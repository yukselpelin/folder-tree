import React, { useState } from 'react';

const Foldertree = () => {

  const [openFolders, setOpenFolders] = useState({})

  const folders = [
    {
      name:"Project Files",
      children:[
        { name:"index.html", type:"file"},
        { name:"style.css", type:"file"},
      ],
    },
    {
      name:"src",
      children:[
        {
          name:"components",
          type:"folder",
          children:[
            { name:"header.js", type:"file"},
            { name:"footer.js", type:"file"},
          ],
        },
        {name:"App.js", type:"file"},
      ],
    },
    {
      name:"assets",
      children:[
        {
          name:"images",
          type:"folder",
          children:[
            { name:"logo.png", type:"file"},
          ],
        },
        {name:"fonts", type:"folder", children:[]},
      ],
    },
    {
      name:"docs",
      children:[
        { name:"README.md", type:"file"},
        { name:"API.md", type:"file"},
      ],
    },
    {
      name:"tests",
      children:[
        { name:"App.tests.js", type:"file"},
        { name:"utils.tests.js", type:"file"},
      ],
    },
  ];

  const toggleFolder = (folderName) => {
    setOpenFolders((prev) => ({
      ...prev,
      [folderName]: !prev[folderName],
    }))
  }

  const renderItem = (item, level = 0) => {
    const paddingLeft = `${level * 20}px`;

    if(item.type === 'file'){
      return(
        <div key={item.name} className='flex items-center rounded px-2 py-1 text-lg hover:bg-gray-100'
          style={{paddingLeft: paddingLeft}}
        >
          <span class="material-symbols-outlined">description</span>
          <span className='ml-2'>{item.name}</span>
        </div>
      )
    }

    return(
      <div key={item.name}>
        <div className='flex cursor-pointer items-center rounded px-2 py-1 hover:bg-gray-100'
          style={{paddingLeft: paddingLeft}}
          onClick={() => toggleFolder(item.name)}
        >
          <span className='material-symbols-outlined'>{openFolders[item.name] ? "folder_open" : "folder" }</span>
          <span className='ml-2 text-lg font-medium'>{item.name}</span>
        </div>

        {
          openFolders[item.name] && item.children && (
            <div>
              {item.children.map((child) => renderItem(child, level + 1))}
            </div>
          )
        }

      </div>
    )
  }

  return (
    <div className='rounded-lg border p-4'>
      {folders.map((folder) => (
        renderItem(folder)
      ))}
    </div>
  )
};

export default Foldertree