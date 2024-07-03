import React, { useState, useRef } from 'react';
import Terminal from 'react-console-emulator';
import AutoComplete from './AutoComplete';
import { commands } from './commands';

const TerminalComponent = () => {
  const [autocompleteOptions, setAutocompleteOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const terminalRef = useRef(null);

  const handleAutocomplete = input => {
    const inputLowerCase = input.toLowerCase();
    const matchingOptions = Object.keys(commands).filter(option =>
      option.toLowerCase().startsWith(inputLowerCase)
    );
    setAutocompleteOptions(matchingOptions);
  };

  const handleCommandChange = value => {
    console.log('Command change:', value);
    setInputValue(value);
    handleAutocomplete(value);
  };

  const handleCommandSubmit = command => {
    setInputValue('');
    setAutocompleteOptions([]);
    // Handle command submission
  };

  const handleKeyDown = event => {
    if (event.key === 'Tab') {
      console.log('Tab key pressed');
      event.preventDefault();
      const currentInput = terminalRef.current.getCommandLine();
      const matchingOptions = autocompleteOptions.filter(option =>
        option.toLowerCase().startsWith(currentInput.toLowerCase())
      );
      if (matchingOptions.length === 1) {
        setInputValue(matchingOptions[0]);
      }
    }
  };


  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Terminal
        ref={terminalRef}
        commands={commands}
        welcomeMessage={'Welcome to my website! Type "help" to see all available commands.'}
        promptLabel={'me@bisheshank:~$'}
        autoFocus={true}
        errorText={'Command not found! Type "help" to see all available commands.'}
        styleEchoBack='fullInherit'
        value={inputValue}
        onChange={handleCommandChange}
        onSubmit={handleCommandSubmit}
        onKeyDown={handleKeyDown}
        style={{
          overflow: 'auto',
          width: '90%',
          height: '80%',
        }}
      />
      {autocompleteOptions.length > 0 && (
        <AutoComplete options={autocompleteOptions} onSelect={option => setInputValue(option)} />
      )}
    </div>
  );
};

export default TerminalComponent;

