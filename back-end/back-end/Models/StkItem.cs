using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back_end.Models
{
    [Table("StkItem")]
    public class StkItem
    {
        [Key, Required]
        public int StockLink { get; set; }

        [MaxLength(255)]
        public string Code { get; set; }

        [MaxLength(255)]
        public string Description_1 { get; set; }

        [MaxLength(255)]
        public string Description_2 { get; set; }

        [MaxLength(255)]
        public string Description_3 { get; set; }

        [MaxLength(20)]
        public string ItemGroup { get; set; }

        [MaxLength(5)]
        public string Pack { get; set; }

        [MaxLength(4)]
        public string TTI { get; set; }

        [MaxLength(4)]
        public string TTC { get; set; }

        [MaxLength(4)]
        public string TTG { get; set; }

        [MaxLength(4)]
        public string TTR { get; set; }

        [MaxLength(255)]
        public string Bar_Code { get; set; }

        public double? Re_Ord_Lvl { get; set; }

        public double? Re_Ord_Qty { get; set; }

        public double? Min_Lvl { get; set; }

        public double? Max_Lvl { get; set; }

        public double? AveUCst { get; set; }

        public double? LatUCst { get; set; }

        public double? LowUCst { get; set; }

        public double? HigUCst { get; set; }

        public double? StdUCst { get; set; }

        public double? Qty_On_Hand { get; set; }

        public double? LGrvCount { get; set; }

        public bool ServiceItem { get; set; }

        public bool ItemActive { get; set; }

        public double? ReservedQty { get; set; }

        public double? QtyOnPO { get; set; }

        public double? QtyOnSO { get; set; }

        public bool WhseItem { get; set; }

        public bool SerialItem { get; set; }

        public bool DuplicateSN { get; set; }

        public bool StrictSN { get; set; }

        [MaxLength(1)]
        public string BomCode { get; set; }

        public int? SMtrxCol { get; set; }

        public int? PMtrxCol { get; set; }

        public double? JobQty { get; set; }

        [MaxLength(50)]
        public string cModel { get; set; }

        [MaxLength(50)]
        public string cRevision { get; set; }

        [MaxLength(50)]
        public string cComponent { get; set; }

        public DateTime? dDateReleased { get; set; }


        public int? iBinLocationID { get; set; }

        public DateTime? dStkitemTimeStamp { get; set; }

        public int? iInvSegValue1ID { get; set; }

        public int? iInvSegValue2ID { get; set; }

        public int? iInvSegValue3ID { get; set; }

        public int? iInvSegValue4ID { get; set; }

        public int? iInvSegValue5ID { get; set; }

        public int? iInvSegValue6ID { get; set; }

        public int? iInvSegValue7ID { get; set; }

        [MaxLength(255)]
        public string cExtDescription { get; set; }

        [MaxLength(20)]
        public string cSimpleCode { get; set; }

        public bool bCommissionItem { get; set; }

        public double? MFPQty { get; set; }

        public bool bLotItem { get; set; }

        public int? iLotStatus { get; set; }

        public bool bLotMustExpire { get; set; }

        public int? iItemCostingMethod { get; set; }

        public double? fItemLastGRVCost { get; set; }

        public int? iEUCommodityID { get; set; }

        public int? iEUSupplementaryUnitID { get; set; }

        public double? fNetMass { get; set; }

        public int? iUOMStockingUnitID { get; set; }

        public int? iUOMDefPurchaseUnitID { get; set; }

        public int? iUOMDefSellUnitID { get; set; }

        public int? uiIISRVPRICEID { get; set; }

        public bool ubIIEDGEALLOWANCE { get; set; }

        public double? ufIIThickness { get; set; }

        public bool ubIITemplate { get; set; }

        public int? uiIITemplPriceID { get; set; }

        public bool ubIIGLASSSERVICE { get; set; }

        public int? uiIIItemType { get; set; }

        public double? ufIIMINCHRG { get; set; }

        public double? ufIIMINSQM { get; set; }

        public double? ufIIWEIGHT { get; set; }

        public int? uiIIPRICETYPEID { get; set; }

        public bool? ubIIPrintLabels { get; set; }

        public bool DefaultGlassService { get; set; }

        public bool IsLaminateItem { get; set; }

        public double? ufIIQtyInVolume { get; set; }

        public int? uiIIMainItemLink { get; set; }

        public bool? ubIIAllowNegative { get; set; }

        public int? uiIISupplier { get; set; }

        public int? uiIIWidth { get; set; }

        public int? uiIIHeight { get; set; }

        public double? ufIILotQty { get; set; }

        public double? ufIIGrvQty { get; set; }

        public double? ufIISOQtyVolume { get; set; }

        public double? uiIIWarehouse { get; set; }

        public bool ShowPODes { get; set; }

        public bool IsNonStockItem { get; set; }

        public bool IsExternalItem { get; set; }

        public double? POMinimumArea { get; set; }

        [MaxLength(50)]
        public string AccountNumber { get; set; }

        public int? CostCentre { get; set; }

        [MaxLength(255)]
        public string AddDetails { get; set; }

        [MaxLength(50)]
        public string SalesAccount { get; set; }

        [MaxLength(50)]
        public string PurchaseAccount { get; set; }

        public double? Length { get; set; }

        public double? BulkQty { get; set; }

        public double? BulkRate { get; set; }

        public bool PriceListItem { get; set; }

        public bool CalcPriceAsPercentage { get; set; }

        public double CalcPricePercentage { get; set; }

        public bool BOMItem { get; set; }


    }
}
