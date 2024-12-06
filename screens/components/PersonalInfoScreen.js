import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Icon, Input, Overlay } from 'react-native-elements';

const PersonalInfoScreen = () => {
  const [isNameEditVisible, setIsNameEditVisible] = useState(false);
  const [isPhoneEditVisible, setIsPhoneEditVisible] = useState(false);
  const [isEmailEditVisible, setIsEmailEditVisible] = useState(false);

  const [name, setName] = useState('Sikwela Brainy');
  const [phone, setPhone] = useState('123-456-7890');
  const [email, setEmail] = useState('sikwela@example.com');

  const toggleNameEdit = () => setIsNameEditVisible(!isNameEditVisible);
  const togglePhoneEdit = () => setIsPhoneEditVisible(!isPhoneEditVisible);
  const toggleEmailEdit = () => setIsEmailEditVisible(!isEmailEditVisible);

  return (
    <View style={tw`flex-1 items-center pt-10 bg-white`}>
      <View style={tw`w-40 h-40 rounded-full bg-gray-300 justify-center items-center mb-8`}>
        <View style={tw`w-20 h-20 rounded-full bg-white justify-center items-center relative`}>
          <Icon name="person" size={60} color="gray" style={tw`rounded-full`} />
          <TouchableOpacity style={tw`absolute bottom-0 right-0 bg-green-500 rounded-full p-1`}>
            <Icon name="add" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`flex-row items-center w-4/5 mb-4`}>
        <Icon name="person" size={24} />
        <Text style={tw`flex-1 text-lg ml-2`}>{name}</Text>
        <TouchableOpacity onPress={toggleNameEdit}>
          <Text style={tw`text-blue-500`}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row items-center w-4/5 mb-4`}>
        <Icon name="phone" size={24} />
        <Text style={tw`flex-1 text-lg ml-2`}>{phone}</Text>
        <TouchableOpacity onPress={togglePhoneEdit}>
          <Text style={tw`text-blue-500`}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-row items-center w-4/5 mb-4`}>
        <Icon name="email" size={24} />
        <Text style={tw`flex-1 text-lg ml-2`}>{email}</Text>
        <TouchableOpacity onPress={toggleEmailEdit}>
          <Text style={tw`text-blue-500`}>Edit</Text>
        </TouchableOpacity>
      </View>

      {/* Name Edit Overlay */}
      <Overlay isVisible={isNameEditVisible} onBackdropPress={toggleNameEdit}>
        <View style={tw`w-4/5 p-4 items-center`}>
          <Text style={tw`text-lg mb-4`}>Edit Name</Text>
          <Input value={name} onChangeText={setName} />
          <TouchableOpacity style={tw`bg-green-500 p-2 rounded mt-2`} onPress={toggleNameEdit}>
            <Text style={tw`text-white`}>Save</Text>
          </TouchableOpacity>
        </View>
      </Overlay>

      {/* Phone Edit Overlay */}
      <Overlay isVisible={isPhoneEditVisible} onBackdropPress={togglePhoneEdit}>
        <View style={tw`w-4/5 p-4 items-center`}>
          <Text style={tw`text-lg mb-4`}>Edit Phone</Text>
          <Input value={phone} onChangeText={setPhone} />
          <TouchableOpacity style={tw`bg-green-500 p-2 rounded mt-2`} onPress={togglePhoneEdit}>
            <Text style={tw`text-white`}>Save</Text>
          </TouchableOpacity>
        </View>
      </Overlay>

      {/* Email Edit Overlay */}
      <Overlay isVisible={isEmailEditVisible} onBackdropPress={toggleEmailEdit}>
        <View style={tw`w-4/5 p-4 items-center`}>
          <Text style={tw`text-lg mb-4`}>Edit Email</Text>
          <Input value={email} onChangeText={setEmail} />
          <TouchableOpacity style={tw`bg-green-500 p-2 rounded mt-2`} onPress={toggleEmailEdit}>
            <Text style={tw`text-white`}>Save</Text>
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};

export default PersonalInfoScreen;
