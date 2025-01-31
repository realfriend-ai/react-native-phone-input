import React from 'react';
import { TextInput } from 'react-native';
import { ReactNativePhoneInputProps } from './typings';
export default class PhoneInput<TextComponentType extends React.ComponentType = typeof TextInput> extends React.Component<ReactNativePhoneInputProps<TextComponentType>, any> {
    static setCustomCountriesData(json: any): void;
    private picker;
    private inputPhone;
    constructor(props: any);
    componentDidUpdate(): void;
    onChangePhoneNumber: (number: any) => void;
    onPressFlag: () => void;
    getPickerData(): any;
    getCountryCode(): any;
    getAllCountries(): any;
    getFlag: (iso2: any) => any;
    getDialCode(): string;
    getValue(text?: any): any;
    getNumberType(): any;
    getISOCode: () => any;
    selectCountry: (iso2: any) => void;
    setValue: (number: any) => void;
    isValidNumber(): any;
    format(text: any, iso2?: any): any;
    updateValue(number: any, actionAfterSetState?: any): void;
    possiblyEliminateZeroAfterCountryCode(number: any): any;
    focus(): void;
    blur(): void;
    render(): JSX.Element;
}
