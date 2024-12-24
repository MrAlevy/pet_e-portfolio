# Inferential Statistics and Hypothesis Testing; Data Analysis and Visualisation

<div style="background-color: #fff8db; border: 1px solid #f7d67d; padding: 15px; border-radius: 5px; font-family: Arial, sans-serif; font-size: 16px;  margin-bottom: 40px">
  📁 Click 
  <a href="https://pet-e-portfolio.vercel.app/exercises/unit7.zip" style="color: #0073e6; text-decoration: underline; font-weight: bold;">here</a> 
  to download the archive containing the following exercise files with solutions:
  <ul style="margin-top: 10px; padding-left: 20px; font-size: 16px;">
    <li>Exa 7.1B, Exa 7.2B, Exa 7.3D, Exa 7.4F, Exa 7.6B</li>
    <li>Exe 8.1B, Exe 8.2B, Exe 8.3D, Exe 8.4G, Exe 8.6C</li>
  </ul>
</div>

# Exercise 7.1

```plaintext
Recall that in the previous unit exercises, a two-tailed test was undertaken whether the population
mean impurity differed between the two filtration agents in Data Set G.
Suppose instead a one-tailed test had been conducted to determine whether Filter Agent 1 was
the more effective. What would your conclusions have been?
```

<br/>

If a **one-tailed test** had been used to check whether **Filter Agent 1** is better at reducing impurity levels than **Filter Agent 2**, the results could have been different from the earlier two-tailed test.
<br/>

**Context**
Previously, a two-tailed independent samples t-test was done to check if there was a difference in the average impurity levels between the two filtration agents in **Data Set G**. This test gave a p-value above 0.05, meaning no significant difference was found at the 5% level.

A one-tailed test, instead, would focus only on the idea that **Filter Agent 1** is more effective (i.e., it reduces impurity levels more than **Filter Agent 2**). This approach looks for a difference in only one direction, which increases the test's power by using the entire significance level (\( \alpha = 0.05 \)) for one tail of the distribution.

**Possible Outcomes**

- If the one-tailed test resulted in a p-value less than 0.05, it would show **statistically significant evidence** at the 5% level to support that **Filter Agent 1** is more effective than **Filter Agent 2**.
- If the one-tailed test gave a p-value greater than or equal to 0.05, the result would be the same as the two-tailed test: no evidence to suggest that **Filter Agent 1** is better.

**Conclusion**

Using a one-tailed test focused on the effectiveness of **Filter Agent 1** could show it is significantly better at reducing impurities, but only if the test results support this specific direction.
<br/>

# Exercise 7.2

```plaintext
Consider the bank cardholder data of Data Set C. Open the Excel workbook Exa8.6C.xlsx which
contains this data from the Exercises folder.
Assuming the data to be suitably distributed, complete an appropriate test of whether the
population mean income for males exceeds that of females and interpret your findings. What
assumptions underpin the validity of your analysis, and how could you validate them?
```

<br/>

**Interpretation of Findings**

1. F-Test for Variances:

   - P-value = 0.43
   - Since the p-value is greater than 0.05, the null hypothesis of equal variances cannot be rejected. The assumption of equal variances for the t-test is valid.

2. t-Test Assuming Equal Variances:
   - Degrees of Freedom (df) = 118
   - t-Stat = 3.2679
   - t-Critical (one-tail) = 1.66
   - Difference in Means = 8.68
   - Since t-Stat > t-Critical (one-tail), the null hypothesis is rejected. This provides statistically significant evidence that the population mean income for males is higher than that for females.

**Assumptions and Validation**

1. Normality: The income data for both groups should follow a normal distribution. This can be validated using histograms, Q-Q plots, or statistical tests such as Shapiro-Wilk.
2. Homogeneity of Variances: Supported by the F-test result (p = 0.43), indicating equal variances.
3. Independence: Assumes that observations are independent, which depends on the study design and data collection.

**Conclusion**

The analysis indicates that the population mean income for males is significantly higher than that for females, with an average difference of 8.68 units.
<br/>

# Exercise 7.3

```plaintext
Consider the filtration data of Data Set G. Open the Excel workbook Exa8.4G.xlsx which contains
these data from the Exercises folder.
Assuming the data to be suitably distributed, complete a two-tailed test of whether the population
mean impurity differs between the two filtration agents, and interpret your findings.
```

<br/>

**Summary of Results:**

- Mean Impurity Levels:
  - Filtration Agent 1: 8.25
  - Filtration Agent 2: 8.68
- Difference in Means: -0.43
- t-Statistic: -3.26
- Critical Value (Two-Tailed): ±2.20

**Test Outcome:**

The calculated t-statistic (-3.26) is greater in absolute value than the critical value (±2.20). This means we reject the null hypothesis.

**Conclusion:**

There is strong evidence that the mean impurity levels differ between the two filtration agents. The results suggest that Filtration Agent 1 performs better, showing lower impurity levels compared to Filtration Agent 2.
<br/>

# Exercise 7.4

```plaintext
Recall that in Exercise 8.4, a two-tailed test was undertaken of whether the population mean impurity
differs between the two filtration agents in Data Set G.
Suppose instead a one-tailed test had been conducted to determine whether Filter Agent 1 was the
more effective. What would your conclusions have been?
```

<br/>

**Analysis for One-Tailed Test**

If a one-tailed test had been conducted to determine whether Filtration Agent 1 was more effective than Filtration Agent 2, the conclusion would be:

- In the previous exercise, the two-tailed test had a t-statistic of -3.26 and a two-tailed critical value of ±2.20.
- For a one-tailed test at the same 5% significance level, the critical value would be -1.80.

Since the t-statistic (-3.26) is less than the one-tailed critical value (-1.80), we would reject the null hypothesis.

**Conclusion:**

The one-tailed test provides significant evidence that Filtration Agent 1 is more effective than Filtration Agent 2, as it shows a lower mean impurity level.
<br/>

# Exercise 7.5

```plaintext
Consider the bank cardholder data of Data Set C. Open the Excel workbook Exa8.6C.xlsx which
contains this data from the Exercises folder.
Assuming the data to be suitably distributed, complete an appropriate test of whether the population
mean income for males exceeds that of females and interpret your findings. What assumptions
underpin the validity of your analysis, and how could you validate them?
```

<br/>

**Analysis of Bank Cardholder Data: Male vs. Female Income**

An F-test for two-sample variances was conducted to determine whether the population mean income for males exceeds that of females. The results show that the mean income for males is 52.91 with a variance of 233.129, while for females, the mean income is 44.23 with a variance of 190.176. Each group had 60 observations.

The F-statistic (1.22259) is less than the critical value (1.5400), and the p-value (0.2182) is greater than the significance level (0.05). Therefore, we fail to reject the null hypothesis. There is insufficient evidence to conclude that males have a significantly higher variance in income or that the population mean income for males exceeds that of females.

This analysis assumes normality, independence of samples, and equal sample sizes. Normality can be validated with a Shapiro-Wilk test or a normal probability plot, while independence relies on proper data collection. The test results (p-value = 0.2182) also support homogeneity of variances.
<br/>

# Exercise 6.1

```plaintext
Open the Excel workbook Exa 8.1B.xlsx from the Exercises folder. Obtain the sample size, sample
mean weight loss and the sample standard deviation of the weight loss for Diet B. Place these results
in the block of cells F23 to F25, using the same format as that employed for the Diet A results in the
above example.
Briefly interpret your findings. What do these results tell you about the relative effectiveness of the
two weight-reducing diets?
```

<br/>

**Analysis of Diet B Results**

For Diet B, the calculations yield the following results:

- Sample Size (n): 50
- Sample Mean Weight Loss: 3.710 kg
- Sample Standard Deviation (SD): 2.769 kg

**Interpretation:**

The mean weight loss for individuals on Diet B (3.710 kg) is lower than that for Diet A (5.341 kg), suggesting that Diet A is more effective overall. Additionally, the standard deviation for Diet B (2.769 kg) is slightly higher than that for Diet A (2.536 kg), indicating more variability in weight loss results for Diet B.

Since the mean weight loss for Diet B is not as large compared to twice its standard deviation (2 × 2.769 = 5.538), a smaller proportion of individuals on Diet B likely experienced substantial weight loss compared to those on Diet A. Overall, these results suggest that Diet A is relatively more effective at promoting weight loss than Diet B.
<br/>

# Exercise 6.2

```plaintext
Open the Excel workbook Exa 8.2B.xlsx from the Exercises folder. Obtain the sample median, first
and third quartiles and the sample interquartile range of the weight loss for Diet B. Place these results
in the block of cells F26 to F29, using the same format as that employed for the Diet A results in the
above example.
Briefly interpret your findings. What do these results tell you about the relative effectiveness of the
two weight-reducing diets?
```

<br/>

**Analysis of Weight Loss for Diet A and Diet B**

For Diet A, the median weight loss is 5.642 kg, while for Diet B, it is slightly lower at 3.745 kg. The interquartile range (IQR), representing the middle 50% of weight loss data, is 3.285 kg for Diet A and 3.451 kg for Diet B, showing slightly more variability in the results for Diet B.

The first and third quartiles for Diet A (3.748 kg and 7.033 kg) indicate that most participants experienced a weight loss well above zero. For Diet B, however, the first quartile is much lower (1.953 kg), suggesting that a significant portion of participants achieved minimal weight loss.

These results further emphasize that Diet A appears to be more effective overall, with higher median weight loss and a greater proportion of participants achieving substantial weight reduction compared to Diet B.
<br/>

# Exercise 6.3

```plaintext
Open the Excel workbook Exa 8.3D.xlsx from the Exercises folder. Obtain the frequencies and
percentage frequencies of the variable Brand, but this time for the Area 2 respondents, using the
same format as that employed for the Area1 results in the above example.
Briefly interpret your findings. What do these results tell you about the patterns of brand preferences
for each of the two demographic areas?
```

<br/>

**Analysis of Brand Preferences for Area 1 and Area 2**

For Area 1, 15.7% of respondents preferred Brand A, 24.3% preferred Brand B, and 60.0% preferred other brands. In contrast, in Area 2, preferences shifted: 21.1% of respondents chose Brand A, 33.3% chose Brand B, and 45.6% preferred other brands.

These results indicate that Brand B is more popular in Area 2 compared to Area 1, with a notable increase in preference (33.3% vs. 24.3%). Similarly, the preference for Brand A is slightly higher in Area 2 (21.1%) than in Area 1 (15.7%). Conversely, the preference for "other" brands is significantly lower in Area 2 (45.6%) than in Area 1 (60.0%).

This suggests that Area 2 exhibits a stronger preference for the two specific brands (A and B) compared to Area 1, where other brands dominate consumer preferences.
