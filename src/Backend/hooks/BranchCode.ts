const BranchCode = (BankName: BankType['BankName']) => {
	switch (BankName.toUpperCase()) {
		case 'CAPITEC':
			return '470010';
		case 'FNB':
			return '250655';
		case 'ABSA':
			return '632005';
		case 'NEDBANK':
			return '198765';
		case 'STANDARD BANK':
			return '051001';
		case 'TYME BANK':
			return '678910';
		case 'AFRICAN BANK':
			return '123456';
		case 'BIDVEST BANK':
			return '462005';
		default:
			return '';
	}
};
export default BranchCode;
