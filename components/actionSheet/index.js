import { View, Text, Pressable } from 'react-native';
import React, { useEffect } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import { useSelector } from 'react-redux';
import { selectSheet } from '../../redux/slices/actionSheetSlice';
import { useRef } from 'react';
import { useMemo } from 'react';

const Modal = () => {
  const sheetState = useSelector(selectSheet);
  const state = useSelector(state => state);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['50%', '100%'], []);

  useEffect(() => {
    if (sheetState.open && bottomSheetRef.current) {
      bottomSheetRef.current.expand();
    }

  }, [sheetState]);

  const renderContent = () => {
    switch (sheetState.sheetType) {
      case 0:
        return (<>
          <Pressable onPress={() => console.log('ok')} style={{ backgroundColor: 'green' }}>
            <Text>Test</Text>
          </Pressable>
        </>);
      default:
        return (<></>);
    }
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={-1}
      handleHeight={40}
      enablePanDownToClose
    >
      {renderContent}
    </BottomSheet>
  );
};

export default Modal;