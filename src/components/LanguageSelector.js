import React from 'react';
import {SUPPORTED_LANG} from "../utils/constants"
import { useDispatch } from 'react-redux';
import { changeLang } from '../utils/configSlice';
const LanguageSelector = () => {
  const dispatch = useDispatch();
  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  }
    return (
      <div className="relative inline-block text-left mr-8 ">
        <select
          onChange={handleLangChange}
          className="appearance-none bg-white border border-gray-400 text-gray-700 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500">
          {SUPPORTED_LANG.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12L4 6h12z" />
          </svg>
        </div>
      </div>
    );
}

export default LanguageSelector;
