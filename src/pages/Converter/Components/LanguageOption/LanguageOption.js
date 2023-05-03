import React, { useState } from 'react';
import * as S from './LanguageOption.styled';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

function LanguageOption({
  inputLanguage,
  outputLanguage,
  setInputLanguage,
  setOutputLanguage,
}) {
  // const [inputLanguage, setInputLanguage] = useState('');
  // const [outputLanguage, setOutputLanguage] = useState('');

  const handleInputLanguage = e => {
    setInputLanguage(e.target.value);
  };

  const handleOutputLanguage = e => {
    setOutputLanguage(e.target.value);
  };

  return (
    <S.LanguageOption>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Input</InputLabel>
          <S.CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={inputLanguage}
            label="Input"
            onChange={handleInputLanguage}
          >
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="py">Python</MenuItem>
            <MenuItem value="js">JavaScript</MenuItem>
          </S.CustomSelect>
        </FormControl>
      </Box>
      <S.Arrow>&#8594;</S.Arrow>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Output</InputLabel>
          <S.CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={outputLanguage}
            label="Output"
            onChange={handleOutputLanguage}
          >
            <MenuItem value="java">Java</MenuItem>
            <MenuItem value="py">Python</MenuItem>
            <MenuItem value="js">JavaScript</MenuItem>
          </S.CustomSelect>
        </FormControl>
      </Box>
    </S.LanguageOption>
  );
}

export default LanguageOption;
