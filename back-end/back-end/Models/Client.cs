using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Models
{
    [Table("Client")]
    public class Client
    {
        [Key,Required]
        public int DCLink { get; set; }

        [MaxLength(20)]
        public string Account { get; set; }

        [MaxLength(50)]
        public string Name { get; set; }

        [MaxLength(5)]
        public string Title { get; set; }

        
        public decimal? PriceHalf { get; set; }

        [MaxLength(6)]
        public string Init { get; set; }

        [MaxLength(30)]
        public string Contact_Person { get; set; }

        [MaxLength(40)]
        public string Physical1 { get; set; }

        [MaxLength(40)]
        public string Physical2 { get; set; }

        [MaxLength(40)]
        public string Physical3 { get; set; }

        [MaxLength(40)]
        public string Physical4 { get; set; }

        [MaxLength(40)]
        public string Physical5 { get; set; }

        [MaxLength(15)]
        public string PhysicalPC { get; set; }

        [MaxLength(30)]
        public string Addressee { get; set; }

        [MaxLength(40)]
        public string Post1 { get; set; }


        [MaxLength(40)]
        public string Post2 { get; set; }


        [MaxLength(40)]
        public string Post3 { get; set; }


        [MaxLength(40)]
        public string Post4 { get; set; }


        [MaxLength(40)]
        public string Post5 { get; set; }


        [MaxLength(15)]
        public string PostPC { get; set; }


        [MaxLength(30)]
        public string Delivered_To { get; set; }

        [MaxLength(25)]
        public string Telephone { get; set; }

        [MaxLength(25)]
        public string Telephone2 { get; set; }

        [MaxLength(25)]
        public string Fax1 { get; set; }

        [MaxLength(25)]
        public string Fax2 { get; set; }

        public int? AccountTerms { get; set; }

        public bool CT { get; set; }

        [MaxLength(15)]
        public string Tax_Number { get; set; }

        [MaxLength(20)]
        public string Registration { get; set; }

        public double? Credit_Limit { get; set; }

        public int? RepID { get; set; }

        public double? Interest_Rate { get; set; }

        public double? Discount { get; set; }

        public bool On_Hold { get; set; }

        public int? BFOpenType { get; set; }

        [MaxLength(60)]
        public string EMail { get; set; }

        public int? BankLink { get; set; }

        [MaxLength(30)]
        public string BranchCode { get; set; }

        [MaxLength(30)]
        public string BankAccNum { get; set; }

        [MaxLength(30)]
        public string BankAccType { get; set; }

        public double? AutoDisc { get; set; }

        public int? DiscMtrxRow { get; set; }

        public int? MainAccLink { get; set; }

        public bool CashDebtor { get; set; }

        public double? DCBalance { get; set; }

        public bool CheckTerms { get; set; }

        public bool UseEmail { get; set; }

        public int? iIncidentTypeID { get; set; }

        public int? iBusTypeID { get; set; }

        public int? iBusClassID { get; set; }

        public int? iCountryID { get; set; }

        public int? iAgentID { get; set; }

        public DateTime? dTimeStamp { get; set; }

        [MaxLength(80)]
        public string cAccDescription { get; set; }

        [MaxLength(50)]
        public string cWebPage { get; set; }

        public int? iClassID { get; set; }

        public int? iAreasID { get; set; }

        [MaxLength(30)]
        public string cBankRefNr { get; set; }

        public int? iCurrencyID { get; set; }

        public bool bStatPrint { get; set; }

        public bool bStatEmail { get; set; }

        [MaxLength(20)]
        public string cStatEmailPass { get; set; }

        public bool bForCurAcc { get; set; }

        public double? fForeignBalance { get; set; }

        public bool bTaxPrompt { get; set; }

        public int? iARPriceListNameID { get; set; }

       
        public int? iSettlementTermsID { get; set; }

        public bool bSourceDocPrint { get; set; }

        public bool bSourceDocEmail { get; set; }

       
        public int? iEUCountryID { get; set; }

       
        public int? iDefTaxTypeID { get; set; }

        public bool bCODAccount { get; set; }

        public DateTime? udARDate { get; set; }

        public int? uiARDeliveryMethod { get; set; }

        public string tOrderNotes { get; set; }

        public int? uiARCATID { get; set; }

       
        public decimal? FuelLevyPercen { get; set; }

        
        public int? FLID { get; set; }

       
        public int? AccountStatusID { get; set; }

        
        public double? IGUFabRate { get; set; }

       
        public double? CreditPercentage { get; set; }

       
        public double? TotalDebitBalance { get; set; }

       
        public double? TotInvoiced { get; set; }

       
        public double? TotPending { get; set; }

        
        public double? TotReceived { get; set; }

        public bool IsGlobalAcc { get; set; }

        public bool IsProspect { get; set; }

        [MaxLength(50)]
        public string CardIdentification { get; set; }

        [MaxLength(50)]
        public string LegalName { get; set; }

        [MaxLength(50)]
        public string TrustName { get; set; }

        public DateTime? BusinessEstablished { get; set; }

        [MaxLength(20)]
        public string RegistrationNo { get; set; }

        [MaxLength(20)]
        public string ACN { get; set; }

        [MaxLength(30)]
        public string Token { get; set; }

        
        public int? EntityStructureID { get; set; }

        
        public int? InsuredID { get; set; }

        public DateTime? CreditApplicationDate { get; set; }

        public DateTime? PPS_ExpiryDate { get; set; }

        [MaxLength(200)]
        public string PersonalGurantee { get; set; }

        [MaxLength(20)]
        public string CC_NameOnCard { get; set; }

        [MaxLength(16)]
        public string CC_CardNumber { get; set; }

        public DateTime? CC_ExpiryDate { get; set; }

        [MaxLength(16)]
        public string BSB { get; set; }

        [MaxLength(20)]
        public string AcountNumber { get; set; }

        [MaxLength(20)]
        public string AcountName { get; set; }

        public DateTime? CreditSearch { get; set; }

        [MaxLength(20)]
        public string GONI { get; set; }

        public bool bSendOrderConfirmations { get; set; }


        [MaxLength(200)]
        public string EmailOrderConfirmationTo { get; set; }

        [MaxLength(200)]
        public string EmailTaxInvoicesTo { get; set; }

        [MaxLength(200)]
        public string EmailStatementsTo { get; set; }

       
        public int? RebateID { get; set; }

        [MaxLength(50)]
        public string XeroGUID { get; set; }


    }
}
