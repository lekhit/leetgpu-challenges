export interface Challenge {
  id: string;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  colabUrl: string;
}

export const challenges: Challenge[] = [
  // Easy Challenges
  { id: '19', name: 'reverse_array', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/19_reverse_array.ipynb' },
  { id: '1', name: 'vector_add', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/1_vector_add.ipynb' },
  { id: '21', name: 'relu', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/21_relu.ipynb' },
  { id: '23', name: 'leaky_relu', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/23_leaky_relu.ipynb' },
  { id: '24', name: 'rainbow_table', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/24_rainbow_table.ipynb' },
  { id: '2', name: 'matrix_multiplication', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/2_matrix_multiplication.ipynb' },
  { id: '31', name: 'matrix_copy', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/31_matrix_copy.ipynb' },
  { id: '3', name: 'matrix_transpose', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/3_matrix_transpose.ipynb' },
  { id: '41', name: 'simple_inference', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/41_simple_inference.ipynb' },
  { id: '52', name: 'silu', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/52_silu.ipynb' },
  { id: '54', name: 'swiglu', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/54_swiglu.ipynb' },
  { id: '62', name: 'value_clipping', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/62_value_clipping.ipynb' },
  { id: '63', name: 'interleave', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/63_interleave.ipynb' },
  { id: '65', name: 'geglu', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/65_geglu.ipynb' },
  { id: '66', name: 'rgb_to_grayscale', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/66_rgb_to_grayscale.ipynb' },
  { id: '68', name: 'sigmoid', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/68_sigmoid.ipynb' },
  { id: '7', name: 'color_inversion', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/7_color_inversion.ipynb' },
  { id: '8', name: 'matrix_addition', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/8_matrix_addition.ipynb' },
  { id: '9', name: '1d_convolution', difficulty: 'easy', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/easy/9_1d_convolution.ipynb' },
  
  // Medium Challenges
  { id: '10', name: '2d_convolution', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/10_2d_convolution.ipynb' },
  { id: '11', name: '3d_convolution', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/11_3d_convolution.ipynb' },
  { id: '13', name: 'histogramming', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/13_histogramming.ipynb' },
  { id: '16', name: 'prefix_sum', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/16_prefix_sum.ipynb' },
  { id: '17', name: 'dot_product', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/17_dot_product.ipynb' },
  { id: '18', name: 'sparse_matrix_vector_multiplication', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/18_sparse_matrix_vector_multiplication.ipynb' },
  { id: '22', name: 'gemm', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/22_gemm.ipynb' },
  { id: '25', name: 'categorical_cross_entropy_loss', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/25_categorical_cross_entropy_loss.ipynb' },
  { id: '27', name: 'mean_squared_error', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/27_mean_squared_error.ipynb' },
  { id: '28', name: 'gaussian_blur', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/28_gaussian_blur.ipynb' },
  { id: '29', name: 'top_k_selection', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/29_top_k_selection.ipynb' },
  { id: '30', name: 'batched_matrix_multiplication', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/30_batched_matrix_multiplication.ipynb' },
  { id: '32', name: 'int8_quantized_matmul', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/32_int8_quantized_matmul.ipynb' },
  { id: '33', name: 'ordinary_least_squares', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/33_ordinary_least_squares.ipynb' },
  { id: '34', name: 'logistic_regression', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/34_logistic_regression.ipynb' },
  { id: '35', name: 'monte_carlo_integration', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/35_monte_carlo_integration.ipynb' },
  { id: '37', name: 'matrix_power', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/37_matrix_power.ipynb' },
  { id: '38', name: 'nearest_neighbor', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/38_nearest_neighbor.ipynb' },
  { id: '40', name: 'batch_normalization', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/40_batch_normalization.ipynb' },
  { id: '42', name: '2d_max_pooling', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/42_2d_max_pooling.ipynb' },
  { id: '43', name: 'count_array_element', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/43_count_array_element.ipynb' },
  { id: '44', name: 'count_2d_array_element', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/44_count_2d_array_element.ipynb' },
  { id: '45', name: 'count_3d_array_element', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/45_count_3d_array_element.ipynb' },
  { id: '47', name: 'subarray_sum', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/47_subarray_sum.ipynb' },
  { id: '48', name: '2d_subarray_sum', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/48_2d_subarray_sum.ipynb' },
  { id: '49', name: '3d_subarray_sum', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/49_3d_subarray_sum.ipynb' },
  { id: '4', name: 'reduction', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/4_reduction.ipynb' },
  { id: '50', name: 'rms_normalization', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/50_rms_normalization.ipynb' },
  { id: '51', name: 'max_subarray_sum', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/51_max_subarray_sum.ipynb' },
  { id: '55', name: 'attn_w_linear_bias', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/55_attn_w_linear_bias.ipynb' },
  { id: '57', name: 'fp16_batched_matmul', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/57_fp16_batched_matmul.ipynb' },
  { id: '58', name: 'fp16_dot_product', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/58_fp16_dot_product.ipynb' },
  { id: '5', name: 'softmax', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/5_softmax.ipynb' },
  { id: '60', name: 'top_p_sampling', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/60_top_p_sampling.ipynb' },
  { id: '61', name: 'rope_embedding', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/61_rope_embedding.ipynb' },
  { id: '64', name: 'weight_dequantization', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/64_weight_dequantization.ipynb' },
  { id: '67', name: 'moe_topk_gating', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/67_moe_topk_gating.ipynb' },
  { id: '69', name: 'jacobi_stencil_2d', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/69_jacobi_stencil_2d.ipynb' },
  { id: '6', name: 'softmax_attention', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/6_softmax_attention.ipynb' },
  { id: '70', name: 'segmented_prefix_sum', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/70_segmented_prefix_sum.ipynb' },
  { id: '71', name: 'parallel_merge', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/71_parallel_merge.ipynb' },
  { id: '72', name: 'stream_compaction', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/72_stream_compaction.ipynb' },
  { id: '75', name: 'sparse_matrix_dense_matrix_multiplication', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/75_sparse_matrix_dense_matrix_multiplication.ipynb' },
  { id: '76', name: 'adder_transformer', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/76_adder_transformer.ipynb' },
  { id: '78', name: '2d_fft', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/78_2d_fft.ipynb' },
  { id: '80', name: 'grouped_query_attention', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/80_grouped_query_attention.ipynb' },
  { id: '81', name: 'int4_matmul', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/81_int4_matmul.ipynb' },
  { id: '82', name: 'linear_recurrence', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/82_linear_recurrence.ipynb' },
  { id: '84', name: 'swiglu_mlp_block', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/84_swiglu_mlp_block.ipynb' },
  { id: '85', name: 'lora_linear', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/85_lora_linear.ipynb' },
  { id: '87', name: 'speculative_decoding_verification', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/87_speculative_decoding_verification.ipynb' },
  { id: '90', name: 'causal_depthwise_conv1d', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/90_causal_depthwise_conv1d.ipynb' },
  { id: '92', name: 'decaying_causal_attention', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/92_decaying_causal_attention.ipynb' },
  { id: '94', name: 'ssm_selective_scan', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/94_ssm_selective_scan.ipynb' },
  { id: '96', name: 'int8_kv_cache_attention', difficulty: 'medium', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/medium/96_int8_kv_cache_attention.ipynb' },
  
  // Hard Challenges
  { id: '12', name: 'multi_head_attention', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/12_multi_head_attention.ipynb' },
  { id: '14', name: 'multi_agent_sim', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/14_multi_agent_sim.ipynb' },
  { id: '15', name: 'sorting', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/15_sorting.ipynb' },
  { id: '20', name: 'kmeans_clustering', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/20_kmeans_clustering.ipynb' },
  { id: '36', name: 'radix_sort', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/36_radix_sort.ipynb' },
  { id: '39', name: 'Fast_Fourier_transform', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/39_Fast_Fourier_transform.ipynb' },
  { id: '46', name: 'bfs_shortest_path', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/46_bfs_shortest_path.ipynb' },
  { id: '53', name: 'casual_attention', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/53_casual_attention.ipynb' },
  { id: '56', name: 'linear_attention', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/56_linear_attention.ipynb' },
  { id: '59', name: 'sliding_window_attn', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/59_sliding_window_attn.ipynb' },
  { id: '73', name: 'all_pairs_shortest_paths', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/73_all_pairs_shortest_paths.ipynb' },
  { id: '74', name: 'gpt2_block', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/74_gpt2_block.ipynb' },
  { id: '93', name: 'llama_transformer_block', difficulty: 'hard', colabUrl: 'https://colab.research.google.com/github/lekhit/leetgpu-challenges/blob/main/challenges/colab_exports/hard/93_llama_transformer_block.ipynb' },
];

export const getChallengesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard' | 'all') => {
  if (difficulty === 'all') return challenges;
  return challenges.filter(c => c.difficulty === difficulty);
};

export const searchChallenges = (query: string, difficulty: 'easy' | 'medium' | 'hard' | 'all' = 'all') => {
  const filtered = getChallengesByDifficulty(difficulty);
  if (!query.trim()) return filtered;
  const lowerQuery = query.toLowerCase();
  return filtered.filter(c => 
    c.name.toLowerCase().includes(lowerQuery) || 
    c.id.includes(lowerQuery)
  );
};

export const getStats = () => ({
  easy: challenges.filter(c => c.difficulty === 'easy').length,
  medium: challenges.filter(c => c.difficulty === 'medium').length,
  hard: challenges.filter(c => c.difficulty === 'hard').length,
  total: challenges.length,
});
