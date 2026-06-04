import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChevronLeft, ChevronDown, Calendar, DollarSign, Sparkles } from 'lucide-react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const AddTransactionScreen = ({ navigation }: any) => {
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [aiInput, setAiInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSmartEntry = () => {
    if (!aiInput) return;
    
    setIsProcessing(true);
    
    // Simulating AI parsing delay
    setTimeout(() => {
      // Very basic simulation of parsing
      const amountMatch = aiInput.match(/(\d+([.,]\d{1,2})?)/);
      if (amountMatch) {
        setAmount(amountMatch[0]);
      }
      
      setDescription(aiInput.charAt(0).toUpperCase() + aiInput.slice(1));
      setIsProcessing(false);
      setAiInput('');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <ChevronLeft size={24} color="#1E293B" />
        </TouchableOpacity>
        <Text style={styles.title}>Add Transaction</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.formContent}>
        <View style={styles.aiSection}>
          <View style={styles.aiHeader}>
            <Sparkles size={20} color="#008080" />
            <Text style={styles.aiTitle}>Smart AI Entry</Text>
          </View>
          <View style={styles.aiInputContainer}>
            <Input 
              placeholder="Ex: Almoço de 50 reais hoje no shopping"
              value={aiInput}
              onChangeText={setAiInput}
              style={styles.aiInputField}
              containerStyle={styles.aiInputComponentContainer}
              testID="ai-input"
            />
            <TouchableOpacity 
              style={[styles.aiButton, !aiInput && styles.aiButtonDisabled]} 
              onPress={handleSmartEntry}
              disabled={!aiInput || isProcessing}
            >
              {isProcessing ? (
                <ActivityIndicator color="#FFFFFF" size="small" />
              ) : (
                <Text style={styles.aiButtonText}>Process</Text>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.aiHint}>Try typing "Spent 50 dollars on pizza today"</Text>
        </View>

        <View style={styles.divider} />

        <Input 
          label="Amount"
          placeholder="0.00"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
          icon={<DollarSign size={20} color="#64748B" />}
          testID="amount-input"
        />

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Category</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select Category</Text>
            <ChevronDown size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text style={styles.dropdownText}>Select Date</Text>
            <Calendar size={20} color="#64748B" />
          </TouchableOpacity>
        </View>

        <Input 
          label="Description"
          placeholder="Optional"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          style={styles.descriptionInput}
          testID="description-input"
        />

        <View style={{ flex: 1 }} />

        <Button 
          title="Save Transaction" 
          onPress={() => navigation.goBack()}
          style={styles.saveButton}
          testID="save-transaction-button"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  backButton: {
    padding: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E293B',
  },
  formContent: {
    padding: 24,
    flexGrow: 1,
  },
  aiSection: {
    backgroundColor: '#F0FDFA',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#CCFBF1',
  },
  aiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  aiTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#008080',
    marginLeft: 8,
  },
  aiInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  aiInputComponentContainer: {
    flex: 1,
    marginRight: 8,
    marginBottom: 0, // Remove bottom margin to align with button
  },
  aiInputField: {
    backgroundColor: '#FFFFFF',
  },
  aiButton: {
    backgroundColor: '#008080',
    paddingHorizontal: 16,
    height: 52,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 80, // Ensure a consistent width
  },
  aiButtonDisabled: {
    backgroundColor: '#94A3B8',
  },
  aiButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  aiHint: {
    fontSize: 12,
    color: '#52ADAD',
    marginTop: 8,
    fontStyle: 'italic',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F5F9',
    marginBottom: 24,
  },
  fieldContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1F5F9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingHorizontal: 16,
    height: 52,
  },
  dropdownText: {
    fontSize: 16,
    color: '#94A3B8',
  },
  descriptionInput: {
    height: 120,
    textAlignVertical: 'top',
    paddingTop: 12,
  },
  saveButton: {
    marginTop: 40,
    backgroundColor: '#008080',
  },
});

export default AddTransactionScreen;
