import { TextInput } from "react-native";

type Props = {
    value: string;
    onChange: (v: string) => void;
};

export default function NoteInput({ value, onChange }: Props) {
    return (
        <TextInput
            value={value}
            onChangeText={onChange}
            placeholder="Optional note (fatigue, easy, bad sleep...)"
            placeholderTextColor="rgba(255,255,255,0.3)"
            className="border border-white/10 rounded-xl p-3 text-white"
            multiline
        />
    );
}
