/* eslint-disable */
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import '../../scss/header.scss';

type Props = {
  query: string;
  setSearchValue: (q: string) => void;
  select: string;
  setSelectValue: (s: string) => void;
  page: string;
  setSelectPage: (s: string) => void;
  view: string;
  setSelectView: (v: string) => void;
}

export const Header:React.FC<Props> = ({ query, setSearchValue, select, setSelectValue, page, setSelectPage, setSelectView, view}) => {

  return (
    <>
      <div className="header">
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search..."
          inputProps={{ 'aria-label': 'search' }} 
          value={query}
          onChange={(event) => {
            setSearchValue(
              event.target.value
            )}}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        </Paper>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Alphabet</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Alphabet"
              onChange={(event) => {
                setSelectValue(
                  event.target.value
                )}}
            >
              <MenuItem value={'ASC'}>ASC</MenuItem>
              <MenuItem value={'DESC'}>DESC</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Posts</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={page}
              label="pagePosts"
              onChange={(event) => {
                setSelectPage(
                  event.target.value
                )}}
            >
              <MenuItem value={'6'}>6</MenuItem>
              <MenuItem value={'12'}>12</MenuItem>
              <MenuItem value={'24'}>24</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <ToggleButtonGroup
          orientation="horizontal"
          value={view}
          exclusive
          onChange={(event, value) => {
            setSelectView(
              value
            )}}
        >
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
}
