import type {HostComponent, ViewProps} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
// @ts-ignore
export interface NativeProps extends ViewProps {}

export default codegenNativeComponent<NativeProps>(
  'SecureViewProto',
) as HostComponent<NativeProps>;
