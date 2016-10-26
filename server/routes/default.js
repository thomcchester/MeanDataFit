var express = require('express');
var router = express.Router();
var Default = require("../models/default.js");

router.route('/')
    .get(function(req, res){
        Default.find(function(err, defaults){
            if(err){console.log(err);}
            res.send(defaults);
        });
    })
    /*  the following post route will only ever be used once.
     *  it is there to provide the initial values for the calculator
     *  which will be generated everytime this application is
     *  loaded fresh on a new server.
     */
    .post(function(req, res){
        var defaults = new Default({
            monthlyRentTenantDef:req.body.monthlyRentTenantDef,
            monthlyRentTenantMin:req.body.monthlyRentTenantMin,
            monthlyRentTenantMax:req.body.monthlyRentTenantMax,
            monthlyRentPersonalDef:req.body.monthlyRentPersonalDef,
            monthlyRentPersonalMin:req.body.monthlyRentPersonalMin,
            monthlyRentPersonalMax:req.body.monthlyRentPersonalMax,
            targetPriceDef:req.body.targetPriceDef,
            targetPriceMin:req.body.targetPriceMin,
            targetPriceMax:req.body.targetPriceMax,
            downPaymentPercentageDef:req.body.downPaymentPercentageDef,
            downPaymentPercentageMin:req.body.downPaymentPercentageMin,
            downPaymentPercentageMax:req.body.downPaymentPercentageMax,
            mortgageRateDef:req.body.mortgageRateDef,
            mortgageRateMin:req.body.mortgageRateMin,
            mortgageRateMax:req.body.mortgageRateMax,
            yearsAmmoritizedDef:req.body.yearsAmmoritizedDef,
            yearsAmmoritizedMin:req.body.yearsAmmoritizedMin,
            yearsAmmoritizedMax:req.body.yearsAmmoritizedMax,
            incomeDef:req.body.incomeDef,
            incomeMin:req.body.incomeMin,
            incomeMax:req.body.incomeMax,
            mortgageYearsDef:req.body.mortgageYearsDef,
            mortgageYearsMin:req.body.mortgageYearsMin,
            mortgageYearsMax:req.body.mortgageYearsMax,
            vacancyDef:req.body.vacancyDef,
            vacancyMin:req.body.vacancyMin,
            vacancyMax:req.body.vacancyMax,
            propertyTaxDef:req.body.propertyTaxDef,
            propertyTaxMin:req.body.propertyTaxMin,
            propertyTaxMax:req.body.propertyTaxMax,
            assocDuesDef:req.body.assocDuesDef,
            assocDuesMin:req.body.assocDuesMin,
            assocDuesMax:req.body.assocDuesMax,
            managementDef:req.body.managementDef,
            managementMin:req.body.managementMin,
            managementMax:req.body.managementMax,
            miscDef:req.body.miscDef,
            miscMin:req.body.miscMin,
            miscMax:req.body.miscMax,
            insuranceAnnualDef:req.body.insuranceAnnualDef,
            insuranceAnnualMin:req.body.insuranceAnnualMin,
            insuranceAnnualMax:req.body.insuranceAnnualMax,
            utilsDef:req.body.utilsDef,
            utilsMin:req.body.utilsMin,
            utilsMax:req.body.utilsMax,
            legalAccountingDef:req.body.legalAccountingDef,
            legalAccountingMin:req.body.legalAccountingMin,
            legalAccountingMax:req.body.legalAccountingMax,
            taxBracketDef:req.body.taxBracketDef,
            taxBracketMin:req.body.taxBracketMin,
            taxBracketMax:req.body.taxBracketMax,
            repairValueDef:req.body.repairValueDef,
            repairValueMin:req.body.repairValueMin,
            repairValueMax:req.body.repairValueMax,
            yearsDef:req.body.yearsDef,
            yearsMin:req.body.yearsMin,
            yearsMax:req.body.yearsMax,
            zipCode: req.body.zipCode,
            renterInsuranceDef: req.body.renterInsuranceDef,
            renterInsuranceMin: req.body.renterInsuranceMin,
            renterInsuranceMax:req.body.renterInsuranceMax,
            appreciationRateDef:req.body.appreciationRateDef,
            appreciationRateMin:req.body.appreciationRateMin,
            appreciationRateMax:req.body.appreciationRateMax,
            appreciationRateHomeDef:req.body.appreciationRateHomeDef,
            appreciationRateHomeMin:req.body.appreciationRateHomeMin,
            appreciationRateHomeMax:req.body.appreciationRateHomeMax,
            duplexBuyDef:req.body.duplexBuyDef,
            duplexBuyMin:req.body.duplexBuyMin,
            duplexBuyMax:req.body.duplexBuyMax
        });
        defaults.save(function(err, defaults){
            if(err) console.log(err);
            res.send(defaults);
        });
    });

    router.route('/:id').put(function(req, res){
        Default.findById(req.body._id, function(err, defaults){
            if(err) res.send(err);
            console.log(req.body);

            defaults.monthlyRentTenantDef = req.body.monthlyRentTenantDef;
            defaults.monthlyRentTenantMin = req.body.monthlyRentTenantMin;
            defaults.monthlyRentTenantMax = req.body.monthlyRentTenantMax;
            defaults.monthlyRentPersonalDef = req.body.monthlyRentPersonalDef;
            defaults.monthlyRentPersonalMin = req.body.monthlyRentPersonalMin;
            defaults.monthlyRentPersonalMax = req.body.monthlyRentPersonalMax;
            defaults.targetPriceDef = req.body.targetPriceDef;
            defaults.targetPriceMin = req.body.targetPriceMin;
            defaults.targetPriceMax = req.body.targetPriceMax;
            defaults.downPaymentPercentageDef = req.body.downPaymentPercentageDef;
            defaults.downPaymentPercentageMin = req.body.downPaymentPercentageMin;
            defaults.downPaymentPercentageMax = req.body.downPaymentPercentageMax;
            defaults.mortgageRateDef = req.body.mortgageRateDef;
            defaults.mortgageRateMin = req.body.mortgageRateMin;
            defaults.mortgageRateMax = req.body.mortgageRateMax;
            defaults.yearsAmmoritizedDef = req.body.yearsAmmoritizedDef;
            defaults.yearsAmmoritizedMin = req.body.yearsAmmoritizedMin;
            defaults.yearsAmmoritizedMax = req.body.yearsAmmoritizedMax;
            defaults.incomeDef = req.body.incomeDef;
            defaults.incomeMin = req.body.incomeMin;
            defaults.incomeMax = req.body.incomeMax;
            defaults.mortgageYearsDef = req.body.mortgageYearsDef;
            defaults.mortgageYearsMin = req.body.mortgageYearsMin;
            defaults.mortgageYearsMax = req.body.mortgageYearsMax;
            defaults.vacancyDef = req.body.vacancyDef;
            defaults.vacancyMin = req.body.vacancyMin;
            defaults.vacancyMax = req.body.vacancyMax;
            defaults.propertyTaxDef = req.body.propertyTaxDef;
            defaults.propertyTaxMin = req.body.propertyTaxMin;
            defaults.propertyTaxMax = req.body.propertyTaxMax;
            defaults.assocDuesDef = req.body.assocDuesDef;
            defaults.assocDuesMin = req.body.assocDuesMin;
            defaults.assocDuesMax = req.body.assocDuesMax;
            defaults.managementDef = req.body.managementDef;
            defaults.managementMin = req.body.managementMin;
            defaults.managementMax = req.body.managementMax;
            defaults.miscDef = req.body.miscDef;
            defaults.miscMin = req.body.miscMin;
            defaults.miscMax = req.body.miscMax;
            defaults.insuranceAnnualDef = req.body.insuranceAnnualDef;
            defaults.insuranceAnnualMin = req.body.insuranceAnnualMin;
            defaults.insuranceAnnualMax = req.body.insuranceAnnualMax;
            defaults.utilsDef = req.body.utilsDef;
            defaults.utilsMin = req.body.utilsMin;
            defaults.utilsMax = req.body.utilsMax;
            defaults.legalAccountingDef = req.body.legalAccountingDef;
            defaults.legalAccountingMin = req.body.legalAccountingMin;
            defaults.legalAccountingMax = req.body.legalAccountingMax;
            defaults.taxBracketDef = req.body.taxBracketDef;
            defaults.taxBracketMin = req.body.taxBracketMin;
            defaults.taxBracketMax = req.body.taxBracketMax;
            defaults.repairValueDef = req.body.repairValueDef;
            defaults.repairValueMin = req.body.repairValueMin;
            defaults.repairValueMax = req.body.repairValueMax;
            defaults.yearsDef = req.body.yearsDef;
            defaults.yearsMin = req.body.yearsMin;
            defaults.yearsMax = req.body.yearsMax;
            defaults.zipCode = req.body.zipCode;
            defaults.renterInsuranceDef= req.body.renterInsuranceDef;
            defaults.renterInsuranceMin =req.body.renterInsuranceMin;
            defaults.renterInsuranceMax =req.body.renterInsuranceMax;
            defaults.appreciationRateDef=req.body.appreciationRateDef;
            defaults.appreciationRateMin=req.body.appreciationRateMin;
            defaults.appreciationRateMax=req.body.appreciationRateMax;
            defaults.appreciationRateHomeDef=req.body.appreciationRateHomeDef;
            defaults.appreciationRateHomeMin=req.body.appreciationRateHomeMin;
            defaults.appreciationRateHomeMax=req.body.appreciationRateHomeMax;
            defaults.duplexBuyDef=req.body.duplexBuyDef;
            defaults.duplexBuyMin=req.body.duplexBuyMin;
            defaults.duplexBuyMax=req.body.duplexBuyMax;

            defaults.save(function(err){
                if(err) res.send(err);
                res.json({message: 'defaults have been updated!'});
            });
        });
    });

module.exports = router;
