import { NativeModules } from "react-native";
const { PDFModule } = NativeModules

interface PDFInterface {
    convert(filepath: string, callback: CallableFunction): void
}

export default PDFModule as PDFInterface