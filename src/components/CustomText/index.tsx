import { Text } from 'react-native'
import { colors } from '../../utils/colors'

type Props = {
    color?: string,
    size?: number,
    fontFam?: string,
    text?: any,
    style?: any,
    lineHeight?: number
}

const CustomText = ({ color, size, fontFam, text, style, lineHeight }: Props) => {
    return (
        <Text
            style={[
                {
                    color: color || colors.black,
                    fontSize: size || 12,
                    fontFamily: fontFam || "Montserrat-SemiBold",
                    ...(lineHeight && { lineHeight: lineHeight }),
                }, style
            ]}
        >
            {text}
        </Text >
    )
}
export default CustomText
