import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
// import I18n from '../components/i18n';

// import { useTransition, useTranslation } from 'react-i18next';

const language = [
  { id: '1', name: '🇬🇧 English', code: 'en' },
  { id: '2', name: '🇪🇸 Español', code: 'es' },
  { id: '3', name: '🇫🇷 Français', code: 'fr' },
  { id: '4', name: '🇩🇪 Deutsch', code: 'de' },
  { id: '5', name: '🇨🇳 中文', code: 'zh' },
  { id: '6', name: '🇯🇵 日本語', code: 'ja' },
  { id: '7', name: '🇧🇷 Português', code: 'pt' },
  { id: '8', name: '🇮🇳 हिन्दी', code: 'hi' },
  { id: '9', name: '🇸🇦 العربية', code: 'ar' },
  { id: '10', name: '🇧🇩 বাংলা', code: 'bn' },
  { id: '11', name: '🇷🇺 Русский', code: 'ru' },
  { id: '12', name: '🇮🇩 Bahasa Indonesia', code: 'id' },
  { id: '13', name: '🇰🇷 한국어', code: 'ko' },
  { id: '14', name: '🇻🇳 Tiếng Việt', code: 'vi' },
  { id: '15', name: '🇹🇷 Türkçe', code: 'tr' },
  { id: '16', name: '🇮🇹 Italiano', code: 'it' },
  { id: '17', name: '🇹🇭 ไทย', code: 'th' },
  { id: '18', name: '🇳🇱 Nederlands', code: 'nl' },
  { id: '19', name: '🇵🇱 Polski', code: 'pl' },
  { id: '20', name: '🇸🇪 Svenska', code: 'sv' },
  { id: '21', name: '🇮🇱 עברית', code: 'he' },
  { id: '22', name: '🇲🇾 Bahasa Melayu', code: 'ms' },
  { id: '23', name: '🇵🇰 اردو', code: 'ur' },
  { id: '24', name: '🇮🇳 தமிழ்', code: 'ta' },
  { id: '25', name: '🇮🇷 فارسی', code: 'fa' },
  { id: '26', name: '🇺🇦 Українська', code: 'uk' },
  { id: '27', name: '🇬🇷 Ελληνικά', code: 'el' },
  { id: '28', name: '🇷🇴 Română', code: 'ro' },
  { id: '29', name: '🇭🇺 Magyar', code: 'hu' },
  { id: '30', name: '🇨🇿 Čeština', code: 'cs' },
  { id: '31', name: '🇫🇮 Suomi', code: 'fi' },
  { id: '32', name: '🇳🇴 Norsk', code: 'no' },
  { id: '33', name: '🇵🇭 Filipino', code: 'tl' },
  { id: '34', name: '🇩🇰 Dansk', code: 'da' },
  { id: '35', name: '🇰🇪 Kiswahili', code: 'sw' }
  
];

const LanguageScreen = () => {
  // const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const [selectedLanguage, setSelectedLanguages] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  // const {t} = useTranslation();

  const handleLanguageSelected = (language) => {
    setSelectedLanguages(language.code);
    // I18n.changeLanguage(language.code);  
    // Save the selected language to redux store or AsyncStorage if needed
  };

  const filteredLanguages = language.filter((lang) =>
   
       lang.name.toLowerCase().includes(searchTerm.toLowerCase())    
    )

    const renderLanguage = ({ item }) => (
      <TouchableOpacity
        style={tw`flex-row justify-between items-center px-4 py-3 mb-2`}
        onPress={() => handleLanguageSelected(item)}
      >
        <Text style={tw`text-lg flex-1`}>{item.name}</Text>
        {selectedLanguage === item.code && (  // Show the icon only if the item is the selected one
          <Icon
            name="check-circle"
            type="material"
            size={24}
            color="green"
            style={tw`ml-2`}
          />
        )}
      </TouchableOpacity>
    );
    
  return (
    <View style={tw`flex-1 p-4`}>

      <TextInput
        style={tw`border border-gray-300 rounded p-2 mb-4 w-full`}
        placeholder="Search Language..."
        value={searchTerm}
        onChangeText={setSearchTerm}
      />

      <Text style={tw`text-xl font-bold mb-4`}>Select Language</Text>
      <FlatList
        data={filteredLanguages}
        keyExtractor={(item) => item.id}
        renderItem={renderLanguage}
        ItemSeparatorComponent={() => (
          <View style={tw`border-b border-gray-300`} />  
        )}
      />
    </View>
  );
};

export default LanguageScreen;
