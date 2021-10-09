import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 800, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Hobbies!</ListSubheader>
      </ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWBILH?ver=8803&q=60&m=8&h=431&w=767&b=%23FFFFFFFF&l=f&x=5&y=12&s=973&d=547&aim=true',
    title: 'Video Gaming',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://www.warhammer-community.com/wp-content/uploads/2021/01/jZ74oxnMew0PR9Yn.jpg',
    title: 'Warhammer 40K',
  },
  {
    img: 'https://airsoftc3.com/other/learn/beginners/src/safe.jpg',
    title: 'Airsofting',
    author: '',
  },
  {
    img: 'https://cdn.lifehack.org/wp-content/uploads/2016/06/21101143/person-984282_1280.jpg',
    title: 'Traveling',
    cols: 2,
  },
  {
    img: 'https://www.computersciencedegreehub.com/wp-content/uploads/2016/02/what-is-coding-1024x683.jpg',
    title: 'Coding',
    cols: 2,
  },
  {
    img: 'https://ih1.redbubble.net/image.962048126.5021/st,small,507x507-pad,600x600,f8f8f8.jpg',
    title: 'Competition Target Shooting',
    rows: 2,
    cols: 2,
    featured: true,
  },
];