/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ModusAlert {
        /**
          * (optional) Whether the alert has a dismiss button
         */
        "dismissible": boolean;
        /**
          * (optional) The alert message
         */
        "message": string;
        /**
          * (optional) The type of alert, sets the color and icon to render
         */
        "type": 'error' | 'info' | 'info-gray' | 'info-gray-dark' | 'success' | 'warning';
    }
    interface ModusBadge {
        /**
          * (optional) The color of the badge
         */
        "color": 'danger' | 'dark' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
        /**
          * (optional) The size of the badge
         */
        "size": 'small' | 'medium' | 'large';
        /**
          * (optional) The type of the badge
         */
        "type": 'counter' | 'default' | 'text';
    }
    interface ModusButton {
        /**
          * (optional) The color of the button
         */
        "color": 'danger' | 'default' | 'primary' | 'secondary' | 'warning';
        /**
          * (optional) Disables the button
         */
        "disabled": boolean;
        /**
          * (optional) The size of the button
         */
        "size": 'small' | 'medium' | 'large';
    }
    interface ModusCheckbox {
        /**
          * (optional) Whether the checkbox is checked.
         */
        "checked": boolean;
        /**
          * (optional) Whether the checkbox is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The checkbox label.
         */
        "label": string;
        /**
          * (optional) The size of the button
         */
        "size": 'small' | 'medium';
    }
    interface ModusDropdown {
        /**
          * (optional) Disables the dropdown
         */
        "disabled": boolean;
        /**
          * (optional) The placement of the dropdown in related to the toggleElement
         */
        "placement": 'top' | 'right' | 'bottom' | 'left';
        /**
          * (required) The element id that the list renders near and that triggers the toggling of the list
         */
        "toggleElementId": string;
    }
    interface ModusList {
    }
    interface ModusListItem {
        /**
          * (optional) Disables the list item
         */
        "disabled": boolean;
        /**
          * (optional) The selected state of the list item
         */
        "selected": boolean;
        /**
          * (optional) The size of list item
         */
        "size": 'condensed' | 'standard';
        /**
          * (optional) The type of list item
         */
        "type": 'standard';
    }
    interface ModusSelect {
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The input's error text.
         */
        "errorText": string;
        /**
          * (optional) The input's helper text.
         */
        "helperText": string;
        /**
          * (optional) The input label.
         */
        "label": string;
        /**
          * The options for the dropdown list.
         */
        "options": unknown[];
        /**
          * The options property to render in the dropdown list.
         */
        "optionsDisplayProp": string;
        /**
          * (optional) Whether the input is required.
         */
        "required": boolean;
        /**
          * (optional) The input's size.
         */
        "size": 'medium' | 'large';
        /**
          * (optional) The input's valid text.
         */
        "validText": string;
        /**
          * (optional) The input value.
         */
        "value": unknown;
    }
    interface ModusSpinner {
        /**
          * (optional) The color of the spinner in hex format (eg #FFFFFF)
         */
        "color": string;
        /**
          * (optional) The size of the spinner, will be applied to both the height and width
         */
        "size": string;
    }
    interface ModusTextInput {
        /**
          * (optional) Whether the input has a clear button.
         */
        "clearable": boolean;
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled": boolean;
        /**
          * (optional) The input's error state text.
         */
        "errorText": string;
        /**
          * (optional) The input's helper text displayed below the input.
         */
        "helperText": string;
        /**
          * (optional) Whether the search icon is included.
         */
        "includeSearchIcon": boolean;
        /**
          * (optional) The input's label.
         */
        "label": string;
        /**
          * (optional) The input's maximum length.
         */
        "maxLength": number;
        /**
          * (optional) The input's minimum length.
         */
        "minLength": number;
        /**
          * (optional) The input's placeholder text.
         */
        "placeholder": string;
        /**
          * (optional) Whether the input's content is read-only
         */
        "readOnly": boolean;
        /**
          * (optional) Whether the input is required.
         */
        "required": boolean;
        /**
          * (optional) The input's size.
         */
        "size": 'medium' | 'large';
        /**
          * (optional) The input's valid state text.
         */
        "validText": string;
        /**
          * (optional) The input's value.
         */
        "value": string;
    }
}
declare global {
    interface HTMLModusAlertElement extends Components.ModusAlert, HTMLStencilElement {
    }
    var HTMLModusAlertElement: {
        prototype: HTMLModusAlertElement;
        new (): HTMLModusAlertElement;
    };
    interface HTMLModusBadgeElement extends Components.ModusBadge, HTMLStencilElement {
    }
    var HTMLModusBadgeElement: {
        prototype: HTMLModusBadgeElement;
        new (): HTMLModusBadgeElement;
    };
    interface HTMLModusButtonElement extends Components.ModusButton, HTMLStencilElement {
    }
    var HTMLModusButtonElement: {
        prototype: HTMLModusButtonElement;
        new (): HTMLModusButtonElement;
    };
    interface HTMLModusCheckboxElement extends Components.ModusCheckbox, HTMLStencilElement {
    }
    var HTMLModusCheckboxElement: {
        prototype: HTMLModusCheckboxElement;
        new (): HTMLModusCheckboxElement;
    };
    interface HTMLModusDropdownElement extends Components.ModusDropdown, HTMLStencilElement {
    }
    var HTMLModusDropdownElement: {
        prototype: HTMLModusDropdownElement;
        new (): HTMLModusDropdownElement;
    };
    interface HTMLModusListElement extends Components.ModusList, HTMLStencilElement {
    }
    var HTMLModusListElement: {
        prototype: HTMLModusListElement;
        new (): HTMLModusListElement;
    };
    interface HTMLModusListItemElement extends Components.ModusListItem, HTMLStencilElement {
    }
    var HTMLModusListItemElement: {
        prototype: HTMLModusListItemElement;
        new (): HTMLModusListItemElement;
    };
    interface HTMLModusSelectElement extends Components.ModusSelect, HTMLStencilElement {
    }
    var HTMLModusSelectElement: {
        prototype: HTMLModusSelectElement;
        new (): HTMLModusSelectElement;
    };
    interface HTMLModusSpinnerElement extends Components.ModusSpinner, HTMLStencilElement {
    }
    var HTMLModusSpinnerElement: {
        prototype: HTMLModusSpinnerElement;
        new (): HTMLModusSpinnerElement;
    };
    interface HTMLModusTextInputElement extends Components.ModusTextInput, HTMLStencilElement {
    }
    var HTMLModusTextInputElement: {
        prototype: HTMLModusTextInputElement;
        new (): HTMLModusTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "modus-alert": HTMLModusAlertElement;
        "modus-badge": HTMLModusBadgeElement;
        "modus-button": HTMLModusButtonElement;
        "modus-checkbox": HTMLModusCheckboxElement;
        "modus-dropdown": HTMLModusDropdownElement;
        "modus-list": HTMLModusListElement;
        "modus-list-item": HTMLModusListItemElement;
        "modus-select": HTMLModusSelectElement;
        "modus-spinner": HTMLModusSpinnerElement;
        "modus-text-input": HTMLModusTextInputElement;
    }
}
declare namespace LocalJSX {
    interface ModusAlert {
        /**
          * (optional) Whether the alert has a dismiss button
         */
        "dismissible"?: boolean;
        /**
          * (optional) The alert message
         */
        "message"?: string;
        /**
          * An event that fires when the alert is dismissed
         */
        "onDismissClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The type of alert, sets the color and icon to render
         */
        "type"?: 'error' | 'info' | 'info-gray' | 'info-gray-dark' | 'success' | 'warning';
    }
    interface ModusBadge {
        /**
          * (optional) The color of the badge
         */
        "color"?: 'danger' | 'dark' | 'primary' | 'secondary' | 'success' | 'tertiary' | 'warning';
        /**
          * (optional) The size of the badge
         */
        "size"?: 'small' | 'medium' | 'large';
        /**
          * (optional) The type of the badge
         */
        "type"?: 'counter' | 'default' | 'text';
    }
    interface ModusButton {
        /**
          * (optional) The color of the button
         */
        "color"?: 'danger' | 'default' | 'primary' | 'secondary' | 'warning';
        /**
          * (optional) Disables the button
         */
        "disabled"?: boolean;
        /**
          * (optional) An event that fires on button click
         */
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The size of the button
         */
        "size"?: 'small' | 'medium' | 'large';
    }
    interface ModusCheckbox {
        /**
          * (optional) Whether the checkbox is checked.
         */
        "checked"?: boolean;
        /**
          * (optional) Whether the checkbox is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The checkbox label.
         */
        "label"?: string;
        /**
          * An event that fires on checkbox click.
         */
        "onCheckboxClick"?: (event: CustomEvent<boolean>) => void;
        /**
          * (optional) The size of the button
         */
        "size"?: 'small' | 'medium';
    }
    interface ModusDropdown {
        /**
          * (optional) Disables the dropdown
         */
        "disabled"?: boolean;
        /**
          * An event that fires on dropdown close
         */
        "onDropdownClose"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The placement of the dropdown in related to the toggleElement
         */
        "placement"?: 'top' | 'right' | 'bottom' | 'left';
        /**
          * (required) The element id that the list renders near and that triggers the toggling of the list
         */
        "toggleElementId"?: string;
    }
    interface ModusList {
    }
    interface ModusListItem {
        /**
          * (optional) Disables the list item
         */
        "disabled"?: boolean;
        /**
          * An event that fires on list item click
         */
        "onItemClick"?: (event: CustomEvent<any>) => void;
        /**
          * (optional) The selected state of the list item
         */
        "selected"?: boolean;
        /**
          * (optional) The size of list item
         */
        "size"?: 'condensed' | 'standard';
        /**
          * (optional) The type of list item
         */
        "type"?: 'standard';
    }
    interface ModusSelect {
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The input's error text.
         */
        "errorText"?: string;
        /**
          * (optional) The input's helper text.
         */
        "helperText"?: string;
        /**
          * (optional) The input label.
         */
        "label"?: string;
        /**
          * An event that fires on input value change.
         */
        "onValueChange"?: (event: CustomEvent<unknown>) => void;
        /**
          * The options for the dropdown list.
         */
        "options"?: unknown[];
        /**
          * The options property to render in the dropdown list.
         */
        "optionsDisplayProp"?: string;
        /**
          * (optional) Whether the input is required.
         */
        "required"?: boolean;
        /**
          * (optional) The input's size.
         */
        "size"?: 'medium' | 'large';
        /**
          * (optional) The input's valid text.
         */
        "validText"?: string;
        /**
          * (optional) The input value.
         */
        "value"?: unknown;
    }
    interface ModusSpinner {
        /**
          * (optional) The color of the spinner in hex format (eg #FFFFFF)
         */
        "color"?: string;
        /**
          * (optional) The size of the spinner, will be applied to both the height and width
         */
        "size"?: string;
    }
    interface ModusTextInput {
        /**
          * (optional) Whether the input has a clear button.
         */
        "clearable"?: boolean;
        /**
          * (optional) Whether the input is disabled.
         */
        "disabled"?: boolean;
        /**
          * (optional) The input's error state text.
         */
        "errorText"?: string;
        /**
          * (optional) The input's helper text displayed below the input.
         */
        "helperText"?: string;
        /**
          * (optional) Whether the search icon is included.
         */
        "includeSearchIcon"?: boolean;
        /**
          * (optional) The input's label.
         */
        "label"?: string;
        /**
          * (optional) The input's maximum length.
         */
        "maxLength"?: number;
        /**
          * (optional) The input's minimum length.
         */
        "minLength"?: number;
        /**
          * An event that fires on input value change.
         */
        "onValueChange"?: (event: CustomEvent<string>) => void;
        /**
          * (optional) The input's placeholder text.
         */
        "placeholder"?: string;
        /**
          * (optional) Whether the input's content is read-only
         */
        "readOnly"?: boolean;
        /**
          * (optional) Whether the input is required.
         */
        "required"?: boolean;
        /**
          * (optional) The input's size.
         */
        "size"?: 'medium' | 'large';
        /**
          * (optional) The input's valid state text.
         */
        "validText"?: string;
        /**
          * (optional) The input's value.
         */
        "value"?: string;
    }
    interface IntrinsicElements {
        "modus-alert": ModusAlert;
        "modus-badge": ModusBadge;
        "modus-button": ModusButton;
        "modus-checkbox": ModusCheckbox;
        "modus-dropdown": ModusDropdown;
        "modus-list": ModusList;
        "modus-list-item": ModusListItem;
        "modus-select": ModusSelect;
        "modus-spinner": ModusSpinner;
        "modus-text-input": ModusTextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "modus-alert": LocalJSX.ModusAlert & JSXBase.HTMLAttributes<HTMLModusAlertElement>;
            "modus-badge": LocalJSX.ModusBadge & JSXBase.HTMLAttributes<HTMLModusBadgeElement>;
            "modus-button": LocalJSX.ModusButton & JSXBase.HTMLAttributes<HTMLModusButtonElement>;
            "modus-checkbox": LocalJSX.ModusCheckbox & JSXBase.HTMLAttributes<HTMLModusCheckboxElement>;
            "modus-dropdown": LocalJSX.ModusDropdown & JSXBase.HTMLAttributes<HTMLModusDropdownElement>;
            "modus-list": LocalJSX.ModusList & JSXBase.HTMLAttributes<HTMLModusListElement>;
            "modus-list-item": LocalJSX.ModusListItem & JSXBase.HTMLAttributes<HTMLModusListItemElement>;
            "modus-select": LocalJSX.ModusSelect & JSXBase.HTMLAttributes<HTMLModusSelectElement>;
            "modus-spinner": LocalJSX.ModusSpinner & JSXBase.HTMLAttributes<HTMLModusSpinnerElement>;
            "modus-text-input": LocalJSX.ModusTextInput & JSXBase.HTMLAttributes<HTMLModusTextInputElement>;
        }
    }
}
