import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { selectSheet } from '../../redux/slices/actionSheetSlice';
import { useRef } from 'react';
import { useMemo } from 'react';

const Modal = () => {
  const sheetState = useSelector(selectSheet);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  useEffect(() => {
    if (sheetState.open && bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }
  }, [sheetState]);

  const renderContent = () => {
    switch (sheetState.sheetType) {
      case 0:
        return (<></>);
      case 1:
        return (<></>);
      default:
        return (<></>);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={sheetState.snapPoints}
      index={-1}
      handleHeight={40}
      enablePanDownToClose
    >
      {renderContent}
    </BottomSheet>
  );
};

export default Modal;