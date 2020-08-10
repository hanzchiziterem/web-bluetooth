import { Bluetooth, BluetoothOptions } from "./src/utils/bluetooth";

/**
 * Default bluetooth instance synonymous with `navigator.bluetooth`
 */
export const bluetooth = new Bluetooth();

/**
 * Bluetooth class for creating new instances
 */
export { Bluetooth, BluetoothOptions };

/**
 * Helper methods and enums
 */
export * from "./src/utils/helpers";
